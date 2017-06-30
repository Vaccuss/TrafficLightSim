# Traffic Light Simulator

Written by Dean Ditton(2017) for technical interview.

This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## To run

Clone, install dependencies, run with ng serve
```
git clone https://github.com/Vaccuss/TrafficLightSim.git
npm install
ng serve
```

Alternative to ng serve use
```
npm start 
```

Find it on `http://localhost:4200/`


## Assumptions made.
1. No images were used, all visuals done in css
2. The system assumes 5 minutes for driving time exclusive of light changes.
3. System has an all red start with north and south lights first to change.
4. System has start button for convenience 
6. As per instructions no unit tests were written.

## Output for system.
#### Essential loop
```
(North & South lights) turn green
(driving delay - 5 minutes)

(North & South lights) turn yellow - delay 30 seconds
(North & South lights) turn red

(West & East) turn green
(driving delay - 5 minutes)

(West & East) turn yellow - delay 30 seconds
```



