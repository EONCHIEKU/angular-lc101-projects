import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  statusCheck: boolean = false;


  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }
 handleLanding(image) {
   window.alert('The shuttle is landing. Landing gear engaged.');
       this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'The shuttle has landed.';
     image.style.bottom = '0px';

  }

  missionAborted(image) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission aborted.';
       image.style.bottom = '0px';
    }
 }
 moveRocket(image, direction: string){
  if(direction === 'right'){
    let movement = parseInt(image.style.left) + 10 + 'px';
    image.style.left = movement
    this.width += 10000
  } else if(direction === 'left'){
    let movement = parseInt(image.style.left) - 10 + 'px';
    image.style.left = movement
    this.width += 10000
  } else if(direction === "up"){
    let movement = parseInt(image.style.bottom) + 10 + 'px';
    image.style.bottom = movement
    this.height += 10000
  } else if(direction === "down"){
    let movement = parseInt(image.style.bottom) - 10 + 'px';
    image.style.bottom = movement
    this.height += 10000
  }

  }

   }


