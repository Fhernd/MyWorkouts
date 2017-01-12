import {
    Injectable
} from '@angular/core';
import {
    Http, 
    Headers, 
    RequestOptions
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{

    apiKey: string;
    workoutsUrl: string;

    constructor(private http: Http){
        this.apiKey = 'CiDC3kEU633TrgPyNu9htomxZuLqEt3Z';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts';
    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl + '?apiKey='+ this.apiKey)
            .map(
                res => res.json()
            );
    }

    addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), {headers: headers})
            .map(res => res.json());
    }

    deleteWorkout(workoutId){
        
        return this.http.delete(this.workoutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
            .map(res => res.json());
    }
}