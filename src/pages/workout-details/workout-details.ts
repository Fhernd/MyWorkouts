import { Component } from '@angular/core';

import {
    NavController,
    NavParams
} from 'ionic-angular';

import {
    WorkoutsPage
} from '../workouts/workouts';

import {
    WorkoutService
} from '../../app/services/workout.service';

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

    workout: any;
    result: any;

  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              private workoutService: WorkoutService) {
    this.workout = this.navParams.get('workout');
  }

  deleteWorkout(workoutId){
      this.workoutService.deleteWorkout(workoutId).subscribe(
            data => {
                this.result = data;
            }, err => console.log(err),
            () => console.log('Workout Deleted')
        );

        this.navCtrl.setRoot(WorkoutsPage);
  }
}
