import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { TbChecklist } from "react-icons/tb";

export const aboutCardsInfo = [
  {
    icon: <PiClockCounterClockwiseBold />,
    title: "Progression",
    subTitle:
      "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
  },
  {
    icon: <CgGym />,
    title: "Workout",
    subTitle:
      " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
  },
  {
    icon: <TbChecklist />,
    title: "Nutritions",
    subTitle:
      "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
  },
];

export const aboutIcons = [
  {
    icon: "/icons/weightlifter.png",
    text: "PROFESSIONAL TRAINERS",
    alt: "icons",
  },
  {
    icon: "/icons/equipment.png",
    text: "MODERN EQUIPMENTS",
    alt: "icons",
  },
  {
    icon: "/icons/gym.png",
    text: "FANCY GYM MACHINES",
    alt: "icons",
  },
];

export const classesInfo = [
  {
    img: "/images/cyclingBg.jpg",
    icon: "/icons/cycle.png",
    title: "cycling",
    date: "Wednesday: 10:00am - 12:00pm",
  },

  {
    img: "/images/karateBg.jpg",
    icon: "/icons/karate.png",
    title: "karate",
    date: "Friday: 10:00am - 11:00am",
  },

  {
    img: "/images/powerBg.jpg",
    icon: "/icons/power.png",
    title: "powerLifting",
    date: "Saturday: 9:00am - 10:00am",
  },

  {
    img: "/images/meditationBg.jpg",
    icon: "/icons/meditation.png",
    title: "Meditation",
    date: "Friday: 1:00pm - 2:00pm",
  },
  {
    img: "/images/mma.jpg",
    icon: "/icons/boxing.png",
    title: "Martial Arts",
    date: "Sunday: 6:00pm - 7:00pm",
  },
  {
    img: "/images/workout.jpg",
    icon: "/icons/weightlifterBgw.png",
    title: "Workout",
    date: "Monday: 1:00pm - 2:00pm",
  },
];

export const whyUsInfo = [
  {
    icon: "/icons/fitness.png",
    title: "free fitness Training",
  },
  {
    icon: "/icons/pushup.png",
    title: "Modern Gym Experiment",
  },
  {
    icon: "/icons/bag.png",
    title: " Gym Bag Equipment",
  },
  {
    icon: "/icons/bottle.png",
    title: "Fresh bottle of water",
  },
];

export const testimonialsIcons = [
  "/icons/tmIcon1.png",
  "/icons/tmIcon2.png",
  "/icons/tmIcon3.png",
  "/icons/tmIcon4.png",
  "/icons/tmIcon5.png",
];

// gym class timetables
export const gymTimetable = [
  {
    day: "Monday",
    classes: [
      {
        time: "08:00am - 10:00am",
        className: "Cardio Blast",
        trainer: "John Smith",
      },
      {
        time: "10:00am - 11:00am",
        className: "Strength Training",
        trainer: "Emily Jones",
      },
      {
        time: "02:00pm - 03:00pm",
        className: "Powerlifting",
        trainer: "Junior Jonas",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "09:30am - 10:30am",
        className: "Yoga Flow",
        trainer: "Sarah Miller",
      },
      {
        time: "11:00am - 12:00pm",
        className: "Zumba Dance",
        trainer: "Mike Anderson",
      },
      {
        time: "05:00pm - 06:00pm",
        className: "Functional Training",
        trainer: "Lisa Brown",
      },
      {
        time: "01:30pm - 02:30pm",
        className: "Boxing",
        trainer: "Daniel Clark",
      },
      {
        time: "07:00pm - 08:30pm",
        className: "Yoga Fusion",
        trainer: "Ava Johnson",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "07:30am - 09:00am",
        className: "HIIT Workout",
        trainer: "Alex Turner",
      },
      {
        time: "10:00am - 11:00am",
        className: "Strength Training",
        trainer: "Emily Jones",
      },
      {
        time: "12:00pm - 01:00pm",
        className: "Pilates",
        trainer: "Olivia White",
      },
      {
        time: "06:30pm - 08:00pm",
        className: "CrossFit",
        trainer: "Ethan Wilson",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "10:00am - 11:00am",
        className: "Spin Cycling",
        trainer: "Sophia Davis",
      },
      {
        time: "01:30pm - 02:30pm",
        className: "Boxing",
        trainer: "Daniel Clark",
      },
      {
        time: "07:00pm - 08:30pm",
        className: "Yoga Fusion",
        trainer: "Ava Johnson",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        time: "08:00am - 09:00am",
        className: "Bodyweight Burn",
        trainer: "Ryan Green",
      },
      {
        time: "11:30am - 12:30pm",
        className: "Functional Fitness",
        trainer: "Chloe Roberts",
      },
      {
        time: "04:00pm - 05:00pm",
        className: "Bootcamp",
        trainer: "Tyler Adams",
      },
      {
        time: "12:00pm - 01:00pm",
        className: "Yoga Sculpt",
        trainer: "Max Turner",
      },
      {
        time: "03:30pm - 05:00pm",
        className: "Weightlifting Workshop",
        trainer: "Samantha Smith",
      },
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        time: "09:00am - 10:00am",
        className: "Cardio Kickboxing",
        trainer: "Megan Lee",
      },
      {
        time: "12:00pm - 01:00pm",
        className: "Yoga Sculpt",
        trainer: "Max Turner",
      },
      {
        time: "03:30pm - 05:00pm",
        className: "Weightlifting Workshop",
        trainer: "Samantha Smith",
      },
    ],
  },
  {
    day: "Sunday",
    classes: [
      {
        time: "10:30am - 11:30am",
        className: "Stretch & Relax",
        trainer: "Natalie Brown",
      },
      {
        time: "02:00pm - 03:30pm",
        className: "Functional Circuit",
        trainer: "Jack Taylor",
      },
      {
        time: "12:00pm - 01:00pm",
        className: "Yoga Sculpt",
        trainer: "Max Turner",
      },
      {
        time: "03:30pm - 05:00pm",
        className: "Weightlifting Workshop",
        trainer: "Samantha Smith",
      },
    ],
  },
];


export const blogsData = [
  {
    id: 1,
    title: 'Nutrition Tips for Optimal Performance',
    text: 'Proper nutrition is a crucial aspect of achieving optimal fitness performance. The food you consume plays a significant role in fueling your workouts and aiding in recovery. In this blog post, we\'ll delve into the importance of balanced nutrition for athletes and fitness enthusiasts.\n\nYou\'ll learn about macronutrients such as carbohydrates, proteins, and fats, and how they contribute to energy production, muscle repair, and overall well-being. We\'ll also discuss the significance of micronutrients like vitamins and minerals in supporting various bodily functions.\n\nAdditionally, we\'ll provide practical tips for meal planning, pre-workout and post-workout nutrition, and hydration strategies. Whether you\'re looking to improve your endurance, build muscle, or achieve specific fitness goals, adopting a well-rounded nutrition plan can make a significant difference in your journey to success.',
    fitnessClass: 'Nutrition',
    author: 'Jessica Miller',
    date: 'August 12, 2023',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: 'The Benefits of High-Intensity Interval Training (HIIT)',
    text: 'High-Intensity Interval Training (HIIT) has gained immense popularity due to its effectiveness in burning calories and improving cardiovascular fitness in a shorter amount of time. In this blog post, we\'ll take an in-depth look at the benefits of incorporating HIIT workouts into your fitness routine.\n\nYou\'ll discover how HIIT alternates between short bursts of intense exercise and periods of rest or low-intensity activity. This approach boosts your metabolism, helps you burn fat, and enhances both aerobic and anaerobic fitness levels. We\'ll also discuss the afterburn effect, where your body continues to burn calories post-workout.\n\nWhether you\'re a beginner or a seasoned athlete, we\'ll provide tips for designing effective HIIT workouts and offer precautions for avoiding overexertion. With its flexibility and time efficiency, HIIT can be a game-changer in your fitness journey.',
    fitnessClass: 'HIIT Session',
    author: 'Michael Davis',
    date: 'August 18, 2023',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'Staying Motivated on Your Fitness Journey',
    text: 'Maintaining motivation is essential for achieving your fitness goals. In this post, we\'ll explore strategies to stay motivated, set realistic milestones, and overcome obstacles that might hinder your progress.\n\nYou\'ll learn about the power of positive self-talk, visualization techniques, and the importance of celebrating small victories. We\'ll also discuss the role of accountability partners, tracking your progress, and adapting your routine to prevent burnout.\n\nWhether you\'re aiming to lose weight, build muscle, or improve your overall health, implementing these motivation techniques can help you stay committed and inspired throughout your fitness journey.',
    fitnessClass: 'Motivation',
    author: 'Sophie Roberts',
    date: 'September 15, 2023',
    image: '/images/blog3.jpg',
  },
  {
    id: 4,
    title: 'Understanding Body Composition',
    text: 'Body composition refers to the ratio of different components in your body, such as muscle, fat, bone, and water. In this educational post, we\'ll break down the concept of body composition, its significance, and how it impacts your health and fitness goals.\n\nYou\'ll gain insights into methods for measuring body composition, including techniques like skinfold measurements and bioelectrical impedance. We\'ll discuss the differences between body mass index (BMI) and body fat percentage and explain why focusing solely on weight may not provide an accurate reflection of your overall health.\n\nWhether you\'re looking to improve your body composition or enhance your athletic performance, understanding the nuances of body composition can guide you toward making informed decisions about your fitness routine and nutrition plan.',
    fitnessClass: 'Body Composition',
    author: 'Daniel Clark',
    date: 'September 22, 2023',
    image: '/images/blog4.jpg',
  },
  {
    id: 5,
    title: 'The Importance of Rest and Recovery',
    text: 'Rest and recovery are essential components of any fitness program. In this post, we\'ll dive into the science behind muscle recovery, the benefits of getting enough sleep, and strategies for optimizing your rest days.\n\nYou\'ll learn how rest allows your muscles to repair and grow stronger, reducing the risk of injury and burnout. We\'ll also explore techniques like foam rolling, stretching, and active recovery to help you bounce back faster. Remember, a well-rested body is better prepared to tackle your next workout with renewed energy.',
    fitnessClass: 'Recovery Strategies',
    author: 'Ryan Thompson',
    date: 'September 29, 2023',
    image: '/images/blog5.jpg',
  },
  {
    id: 6,
    title: 'Incorporating Flexibility Training',
    text: 'Flexibility training is often overlooked but plays a crucial role in overall fitness. In this informative post, we\'ll discuss the benefits of flexibility exercises, how they enhance joint mobility, and their impact on preventing injuries.\n\nYou\'ll explore various stretching techniques, including static, dynamic, and proprioceptive neuromuscular facilitation (PNF) stretching. We\'ll also touch on how flexibility contributes to better posture, reduced muscle tension, and improved athletic performance.\n\nWhether you\'re an athlete or someone looking to enhance your flexibility, incorporating these exercises into your routine can lead to better movement and overall well-being.',
    fitnessClass: 'Flexibility Class',
    author: 'Natalie Green',
    date: 'October 6, 2023',
    image: '/images/blog6.jpg',
  },
];

