import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { QuizzModel } from '../../model/quizz.model';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss'],
  providers: [DestroyableService],
})
export class ExamPageComponent implements OnInit {
  public exam: QuizzModel;
  @Select(QuizzState.selectedQuizz)
  public selectedQuizz$: Observable<QuizzModel>;
  constructor(
    private destroyableService: DestroyableService
  ) {}

  public ngOnInit(): void {
    this.selectedQuizz$.pipe(takeUntil(this.destroyableService.destroy$)).subscribe((quizz) => {
      this.exam = quizz;
    });
  }
}
