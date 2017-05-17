# TrafficLightSim

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

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
2. The 5 minute window was for driving time so changes to lights and other timing delays are additional.
3. System has an all red start.
4. System has controls for usability.
5. Reset control will cancel and reset simulation.
6. As per instructions no unit tests were written.

## Output for system.
#### Essential loop
```
(NS) turn green
(driving delay)
(NS) turn yellow - delay 30 seconds
(NS) turn red
(All delay 500ms)

(WS) turn green
(driving delay)
(WS) turn yellow - delay 30 seconds
(WS) turn red
(All delay 500ms)
```



