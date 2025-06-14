import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Howl } from 'howler';
import { Question } from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class QuizComponent {

  questions: Question[] = [];
  currentIndex = 0;
  score = 0;
  selectedOption: string | null = null;
  quizCompleted = false;
  timeLeft: number = 10;
  timer: any;
  badges: string[] = [];
  showBadgeDialog = false;


  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    this.startTimer();
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

get progress(): number {
  if (this.quizCompleted) {
    return 100;
  }
  return (this.currentIndex / this.questions.length) * 100;
}


  selectOption(option: any) {
    this.selectedOption = option.label ?? option;
  }

  startTimer() {
    this.timeLeft = 10;

    if (this.timer) clearInterval(this.timer);

    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
        this.submit(); // move to next when time runs out
      }
    }, 1000);
  }

  submit() {
    clearInterval(this.timer);

    if (this.selectedOption === this.currentQuestion.correct) {
      this.score++;
      this.playSound('correct');
    } else {
      this.playSound('wrong');
    }

    this.selectedOption = null;

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.startTimer();
    } else {
      this.finishQuiz();
    }
  }

  playSound(type: 'correct' | 'wrong') {
    const file =
      type === 'correct'
        ? 'assets/sounds/mixkit-correct-answer-tone-2870.wav'
        : 'assets/sounds/mixkit-game-show-wrong-answer-buzz-950.wav';

    const sound = new Howl({ src: [file] });
    sound.play();
  }

  
restart() {
  clearInterval(this.timer);
  this.currentIndex = 0;
  this.score = 0;
  this.quizCompleted = false;
  this.selectedOption = null;
  this.badges = [];
  this.showBadgeDialog = false;
  this.startTimer();
}


finishQuiz() {
  this.quizCompleted = true;
  this.evaluateBadges();
  // this.updateProgress();
  confetti();
  if (this.badges.length > 0) {
    this.showBadgeDialog = true;
  }
}

closeBadgeDialog() {
  this.showBadgeDialog = false;
}

  evaluateBadges() {
    if (this.score === this.questions.length) this.badges.push("All Correct");
    if (this.questions.length <= 10 && this.score >= 8) this.badges.push("Quiz Master");
    if (this.timeLeft > 5) this.badges.push("Quick Thinker");
  }
}
