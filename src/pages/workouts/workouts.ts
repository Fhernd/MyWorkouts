import {
    Component,
    OnInit
}  from '@angular/core';
import {
    NavController,
    NavParams
} from 'ionic-angular';

import {
    WorkoutDetailsPage
} from '../workout-details/workout-details';

import {
    WorkoutService
} from '../../app/services/workout.service';

@Component({
    selector: 'workouts-page',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {
    workouts:any[];
    
    constructor(public navCtrl: NavController, 
                private workoutService: WorkoutService, 
                private navParams: NavParams){
        this.workouts = [];

        this.workoutService.getWorkouts().subscribe(
            workouts => {
                this.workouts = workouts;
            }
        );
    }

    ngOnInit(){
        this.workoutService.getWorkouts().subscribe(
            workouts => {
                this.workouts = workouts;
            }
        );
    }

    workoutSelected(event, workout){
        this.navCtrl.push(WorkoutDetailsPage, {
            workout: workout
        });
    }
}