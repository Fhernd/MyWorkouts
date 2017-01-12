import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';

import {
    WorkoutsPage
} from '../workouts/workouts';

import {
    WorkoutService
} from '../../app/services/workout.service';

@Component({
    selector: 'add-workout',
    templateUrl: './add-workout.html'
})
export class AddWorkoutPage {

    title: string;
    note: string;
    type: string;

    result: any; 

    constructor(public navCtrl: NavController, private workoutService: WorkoutService) {
        this.title = '';
        this.note = '';
        this.type = '';
    }

    onSubmit() {
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        };

        this.workoutService.addWorkout(workout).subscribe(
            data => {
                this.result = data;
            }, err => console.log(err),
            () => console.log('Workout Added')
        );

        this.navCtrl.setRoot(WorkoutsPage);
    }
}