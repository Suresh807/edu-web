function talk(){
    var know = {
    "Who are you" : "Hello, Codewith_random here ",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "difference between direct current  and alternating current ":"Direct current (DC) flows in one direction, while alternating current (AC) flows in both directions, reversing its direction periodically.",
    "what is voltage":"Voltage is the difference in electrical potential energy between two points, measured in volts.",
    "what is current":"Current is the flow of electric charge through a conductor, measured in amperes.",
    "what is resistance":"Resistance is the opposition to the flow of electric current, measured in ohms.",
    "what is power":"Power is the rate at which energy is transferred, measured in watts.",
    "What is Ohm's law":"Ohm's law states that the current flowing through a conductor is directly proportional to the voltage across the conductor and inversely proportional to the resistance of the conductor.",
    "What is a circuit":"A circuit is a closed path that allows electric current to flow." ,
    "What are the different types of circuits":"There are many different types of circuits, but some of the most common types are series circuits, parallel circuits, and series-parallel circuits.",
    "What is a battery":"A battery is a device that converts chemical energy into electrical energy.",
    "What is a generator":"A generator is a device that converts mechanical energy into electrical energy.",
    "What is a conductor":"A conductor is a material that allows electricity to flow through it easily.",
    "What is an insulator":"An insulator is a material that does not allow electricity to flow through it easily.",
    "What is a resistor":"A resistor is a device that resists the flow of electric current.",
    "What is a capacitor":"A capacitor is a device that stores electric charge.",
    "What is an inductor":"An inductor is a device that opposes changes in electric current.",
    "What is a diode":"A diode is a device that allows current to flow in one direction only.",
    "What is a transistor":"A transistor is a device that can amplify or switch electronic signals.",
    "What is a transformer":"A transformer is a device that changes the voltage or current of an alternating current (AC) signal.",
    "What is a lightning strike":"A lightning strike is a sudden discharge of electricity from a cloud to the ground or between clouds.",
    "What is static electricity":"Static electricity is a buildup of electric charge on an object.",
    "What is electromagnetism":"Electromagnetism is the interaction between electricity and magnetism."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }