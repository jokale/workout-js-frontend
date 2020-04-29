function myLowerBodyFunction() {
  document.getElementById("lower-body").innerHTML = "Lower body includes legs and glutes. Some of the most common exercises for the lower body are lunges, squats, step-ups, mountain climbers, and squat-thrusts.<br><br>Why It’s Important: Working the lower body tones the legs and glutes, and helps you maintain lower body strength. Powerful leg muscles allow us to climb stairs easily, to squat down and retrieve something off the floor, to get back up if we have fallen. Strong leg muscles also help protect our knees and hips from injury. They help us preserve our mobility, agility and stability as we age, and are helpful in maintaining our balance.";
}

function myUpperBodyFunction(){
  document.getElementById('upper-body').innerHTML = "Upper body includes arms, shoulders and upper back. Some of the most common exercises for the upper body are biceps curls, triceps curls, bench presses, overhead presses, lateral raises, and upright rows. <br><br> Why It’s Important: Working the upper body tones the arms and helps you not only look good, but maintain upper body strength. As we get older–and I’m talking even past age 30–we slowly but surely start to lose muscle. Exercise is key to maintaining muscle mass as the years go by. Upper body workouts also work the shoulders and muscles of the upper back. This aids in keeping good posture as strong muscles help support the upper spine. Good posture allows your lungs and diaphragm to fully expand, aiding in respiratory health."
}
function myCoreFunction(){
  document.getElementById('core').innerHTML= "<br>Your core includes your upper and lower abdominal muscles and back muscles. Some of the most common core exercises are sit-ups of various kinds, push-ups (men’s or women’s), leg raises, and planks. (Upper body workouts also help the core as your stomach muscles should be engaged as you lift. <br><br> Why It’s Important Your core supports your back, which in turn supports your entire body. Having strong stomach and back muscles helps take some of the load off of your spine. It helps improve balance, stability, and posture."
}


function myCardioFunction(){
  document.getElementById('cardio').innerHTML="Cardio is exercise that gets you moving. It increases your heart rate up (hence the name) and makes you perspire. Good cardio exercises are sports such as basketball, soccer, tennis, X-country skiing, skating, running, or in the gym, try the treadmill, stair climber, elliptical, or a brisk set of jumping rope. <br><br>Why It’s Important: Cardio gives your heart and lungs the exercise they need. It helps build stamina and endurance, and burns calories so you achieve and maintain a healthy weight"
}


function myFlexFunction(){
  document.getElementById('flexibility').innerHTML="When we are young, we take the ability to fully stretch our bodies for granted, but it is important to keep stretching as we get older.<br><br>Why It’s Important: A stiff body is more susceptible to injury. Without regular stretching, hamstrings shorten, back muscles tighten, hips stiffen. Stretching also helps relieve tension and reduce inflammation, thus aiding in overall health."
}

function myButtonFunction(){
  alert("Hey your workout looks great, Scroll down to check it out! Don't forget to clear the form")
}

function myFunction(){
  document.getElementById('new-workout-form').reset();
}




const app = new App()
