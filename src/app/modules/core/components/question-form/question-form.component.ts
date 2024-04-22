import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import {
  Question,
  Response,
} from 'src/app/modules/core/models/questions.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });
  }

  submitResponses(): void {
    this.questions.forEach((question) => {
      const response: Response = {
        questionId: question.questionId,
        answer: question.answer,
      };
      this.questionService.submitResponse(response).subscribe({
        next: (res) => console.log('Response saved', res),
        error: (err) => console.error('Error saving response', err),
      });
    });
  }
}
