# CareAI--An-IOT-based-eHealthcare-advisor

## INTRODUCTION
• The medical services industry assumes a fundamental part not just in the individuals yet additionally in the economy all in all. While the medical services area is continually improving, a country like India with its developing populace generally falls short of sufficient offices.

• India has a general medical care model that is generally directed at the state level rather than the government level, with each state having its own openly financed medical services. 

• Significant clinical experts are in metropolitan regions which simply cover a few pieces of India. The need for openness to country regions builds the dangers and decreases personal satisfaction. What's more, the expense of clinical treatment is high.

• Ordinary body tests, forward and backward clinics, and pre-and-post-hospitalization clinical costs all amount to a powerful sum that individuals can't bear. To change this multitude of negative marks, the full advantage of altering IoT in medical care is thought of. 

## PROBLEM STATEMENT
Traditional healthcare systems have been time-consuming and difficult to navigate, making it difficult for people to gain access to medical professionals and timely treatment. Individuals often struggle to detect health vitals, leading to incorrect medication and health risks. A healthcare solution is required that provides comprehensive analysis and monitoring of the generic symptoms, especially for people in remote areas.

## OBJECTTIVES
• To monitor the basic health parameters of the patient and check if there is any unusual behavior or not.
• To provide an IoT-based remote Health care kit and AI Chatbot which provides health advice to patients.
• To generate alert emails of health status to help the patient stay focused on their unique health needs. 

## TECHNOLOGY STACK
-> Version Control
• Git

-> Development
• Backend - Arduino IDE
• Frontend - HTML, CSS, Bootstrap, JS, NodeJs

-> Cloud Platform 
• Chatbot- Google Cloud Platform(GCP) 

-> Database Storage 
• MongoDB Cloud

## METHODOLOGY
The Healthcare system in India suffers from three primary deficiencies: supply, utilisation, and equipment. A key component of IoT in healthcare is the Healthcare kit. It makes record transmission and communication easier. 

To use the kit, the patient first needs to register themselves to the system. 

After registration, the patient can then wear the connected sensors to get their health parameters monitored. 

The sensors used are
o   Max30100
o   LM35 
-> Now to access the website, the user must log in to the website.

-> The user will then receive authentication from MongoDB cloud to get authorization for the website.

-> With the use of a health kit, the three basic parameters i.e. oxygen level, body temperature and pulse rate are measured.

-> This data from the health sensory kit is displayed on the Arduino’s screen through the I2C(Inter-Integrated Circuit) protocol.

-> The data is then fetched from here and sent to the web server through the use of HTTP(Hypertext Transfer Protocol) for the secure transfer of data.

-> From here, if the average heartbeat is greater than 85 BPM, then the user will receive an alert mail with the heart rate value through the SMTP(Simple Mail Transfer Protocol).

-> Furthermore, the website will include health blogs and a chatbot that will provide a self-assessment of mild symptoms. 

•  IOT BASED HEALTHCARE KIT

Our healthcare website is proud to incorporate cutting-edge technology that helps users monitor their health. One of the tools we use is a sensory kit that contains NodeMCU, LM35, and MAX30100 sensors. These sensors are essential in measuring vital signs such as body temperature, heart rate, and oxygen saturation levels. 

•  HEALTH BOT

With the help of Dialog Flow, a like-life conversational AI to the websites, applications, messaging platforms, and contact centre with an intuitive, advanced virtual agent, this project helps the users interact with the website much more easily. The chatbot uses intents and entities for implementing a smooth conversation and then leading to a final diagnosis by an effective text-based diagnostic technique.


<div align="center">
  
![unnamed](https://user-images.githubusercontent.com/78655015/233976306-1c07ac3b-41e8-4381-8595-4a5e3586bfc9.png)
Fig.1 Interfacing NodeMCU with MAX30100 & LM35 (Heart Rate/Pulse rate Sensor & Temperature Sensor)

</div>

![LM35](https://user-images.githubusercontent.com/78655015/233972818-71405e7f-4745-4f61-860c-3af845e3160a.png)

<div align="center">

Fig.2 Methodology Chart

</div>

## CARE-AI WEBSITE!

![Screenshot (82)](https://user-images.githubusercontent.com/78655015/233976362-a4c27eaa-50b0-4093-bddb-920e3b343db3.png)



![Screenshot (83)](https://user-images.githubusercontent.com/78655015/233974386-e7379328-ce60-4394-bf2c-82bfef7628a3.png)



![Screenshot (84)](https://user-images.githubusercontent.com/78655015/233974405-84b58110-2e84-452b-b649-c22d177039a4.png)



![Screenshot (87)](https://user-images.githubusercontent.com/78655015/233974463-22501da5-06ec-481d-bd03-0fa5e565a931.png)



![Screenshot (88)](https://user-images.githubusercontent.com/78655015/233974478-a6494029-4d89-4d51-8a81-16b7fa8957a0.png)



![Screenshot (86)](https://user-images.githubusercontent.com/78655015/233974498-0974b5fe-ba92-4e55-9a6b-5f74bafe23aa.png)

Integrated ChatBot


## APPLICATION
• The chatbot will act as a symptom checker asking patients about their symptoms and provide them with potential diagnoses or advice.

• Health chatbots can provide mental health support and resources for people struggling with mental health issues. 

• The doctors can monitor the health of the patient without the need for the patient  to visit doctors thereby decreasing the frequency of visiting the health checkups.

• This healthcare advising websites can offer searchable directories of healthcare providers and  allowing patients to find providers in their area who accept.

• It can also offer second opinions from healthcare professionals which will allow patients to verify or challenge a diagnosis or treatment plan. 

## CONCLUSION 
The proposed system provides healthcare solutions at any time and from any location. It will mostly benefit people who live in rural areas, as well as the old and disabled.

Our technology collects real-time medical information about a patient and stores it in the MongoDB cloud. It also aids in patient self-diagnosis by merging medical databases. This results in a better comprehension of medical terminology and a more personalised service for patients via our Healthbot. Our web application can contribute to generic accessibility to the masses as it can be used by rural people through mobile phones. We intend to provide virtual support to doctors, patients, and workers in order to improve and connect healthcare for society.

## REFERENCES
[1] S. Bhutada, A. Singh, K. Upadhyaya and P. Gaikar, "Ru-Urb IoT-AI powered Healthcare Kit," 2021 5th International Conference on Intelligent Computing and Control Systems (ICICCS), Madurai, India, 2021, pp. 417-422, doi: 10.1109/ICICCS51141.2021.9432257.

[2] Katariya, Vivek & Vitthal, Shinde & Gutte, & Devare, Manoj. (2019). IntelligentHealthbotforTransformingHealthcare.

[3] P. Gupta, D. Agrawal, J. Chhabra and P. K. Dhir, "IoT-based smart healthcare kit," 2016 International Conference on Computational Techniques in Information and Communication Technologies (ICCTICT), New Delhi, India, 2016, pp. 237-242, doi: 10.1109/ICCTICT.2016.7514585.

[4] M. U. Ahmed, M. Björkman, A. Čaušević H. Fotouhi, and M. Lindén, “An overview on the internet of things for Health Monitoring Systems,” SpringerLink, 01-Jan-1970. Available: https://link.springer.com/chapter/10.1007/978-3-319-47063-4_44.


*This repository contains all the information related to the project.*

