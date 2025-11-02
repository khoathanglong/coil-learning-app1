
import { ProgramData } from '../types';

export const programData: ProgramData = {
  programTitle: "COIL Faculty Development Program",
  categories: [
    { id: "pre-class", title: "1. Pre-COIL Activity" },
    { id: "in-class", title: "2. In-COIL Activity" },
    { id: "post-class", title: "3. Post-COIL Reflection" },
  ],
  courses: [
    // Pre-Class
    {
      courseId: "pre_01",
      category: "pre-class",
      courseTitle: "COIL Foundations & The Intercultural Mirror",
      courseDescription: "Introduces the COIL model to prepare students for virtual global collaboration with international peers.\n\nExplores the \"Intercultural Mirror\" concept to examine High/Low-Context communication and establish a baseline of students' own cultural communication patterns.",
      modules: [
        {
          moduleId: "foundations_m1",
          moduleTitle: "Module 1: What is COIL? (The 'Why')",
          steps: [
            {
              stepId: "f_m1_s1",
              stepTitle: "1.1: Definition & Pedagogy",
              type: "content",
              content: {
                title: "1.1: Definition & Pedagogy",
                customPromptHtml: "<p>COIL stands for Collaborative Online International Learning.</p><ul class='list-disc list-inside space-y-1'><li>It is a pedagogy (a method of teaching) designed to connect students and faculty with overseas universities online.</li><li>Its purpose is to provide an interactive and collaborative learning environment both in and outside the traditional class.</li></ul>"
              }
            },
            {
              stepId: "f_m1_s2",
              stepTitle: "1.2: The Benefits of COIL",
              type: "content",
              content: {
                title: "1.2: The Benefits of COIL",
                customPromptHtml: "<p>COIL provides a new form of global education that combines virtual and in-person methods, offering several key advantages:</p><ul class='list-disc list-inside space-y-1'><li>Enables collaborative and comparative learning between two or more countries.</li><li>Improves students' leadership skills, project planning, management skills, and ICT literacy.</li><li>Fosters networks among faculty members through collaboration, which can potentially lead to joint research.</li><li>Crucially, it provides opportunities for international exchange for students who cannot study abroad due to various constraints (e.g., cost, time, or personal commitments). This makes it a vital tool for providing global education access to all students, including those in rural areas.</li></ul>"
              }
            },
            {
              stepId: "f_m1_s3",
              stepTitle: "1.3: Examples of COIL Collaboration",
              type: "content",
              content: {
                title: "1.3: Examples of COIL Collaboration Methods",
                customPromptHtml: "<ul class='list-disc list-inside space-y-1'><li><b>Synchronous connection:</b> Real-time meetings using online video conference tools such as Zoom.</li><li><b>Asynchronous discussions:</b> Ongoing conversations that don't require participants to be online at the same time, using tools like messenger services and social media.</li><li><b>Exchange of materials:</b> Sharing recordings of lectures and student presentations for feedback and Q&As.</li><li><b>In/outside class:</b> Collaboration can be a formal part of class or an informal project.</li></ul>"
              }
            }
          ]
        },
        {
          moduleId: "foundations_m3",
          moduleTitle: "Module 2: Application & Assessment",
          steps: [
            {
              stepId: "f_m3_q1",
              stepTitle: "Knowledge Check Q1",
              type: "quiz",
              quiz: {
                question: "What is the primary goal of COIL (Collaborative Online International Learning)?",
                options: [
                  { text: "To replace all in-person classes with online-only lectures.", isCorrect: false },
                  { text: "To connect students and faculty with overseas universities for collaborative learning.", isCorrect: true },
                  { text: "To improve students' management skills, with no focus on international connection.", isCorrect: false },
                  { text: "To provide a platform only for asynchronous discussions like social media.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The primary goal is to connect students and faculty internationally for collaborative learning." }
              }
            },
            {
              stepId: "f_m3_q2",
              stepTitle: "Knowledge Check Q2",
              type: "quiz",
              quiz: {
                question: "A student from Germany sends an email that says, 'Your project proposal is missing sections 2 and 3. Please add them and resend by 5 PM.' How would this communication style be classified?",
                options: [
                  { text: "High-Context, because it is relational.", isCorrect: false },
                  { text: "Low-Context, because it is direct, literal, and task-focused.", isCorrect: true },
                  { text: "COIL, because it is using technology.", isCorrect: false },
                  { text: "Asynchronous, because it is an email.", isCorrect: false }
                ],
                feedback: { correct: "Correct! This is a classic example of Low-Context communication.", incorrect: "Incorrect. The style is direct and task-focused, which is characteristic of Low-Context cultures." }
              }
            },
            {
              stepId: "f_m3_q3",
              stepTitle: "Knowledge Check Q3",
              type: "quiz",
              quiz: {
                question: "In a High-Context culture, why might a person avoid saying 'no' directly when asked for a favor they cannot do?",
                options: [
                  { text: "They are being intentionally difficult and unclear.", isCorrect: false },
                  { text: "They are more focused on the task than the relationship.", isCorrect: false },
                  { text: "They are trying to 'save face' for the person asking, to avoid causing embarrassment or conflict.", isCorrect: true },
                  { text: "They only communicate using synchronous tools like Zoom.", isCorrect: false }
                ],
                feedback: { correct: "Correct! Maintaining harmony and saving face are key values in High-Context cultures.", incorrect: "Incorrect. In High-Context cultures, preserving the relationship and avoiding embarrassment ('saving face') is often prioritized over directness." }
              }
            },
            {
              stepId: "f_m3_s4",
              stepTitle: "3.2: Reflection Task",
              type: "content",
              content: {
                title: "3.2: Reflection",
                customPromptHtml: "<h4>Task: Write a 300-word reflection.</h4><p><b>Assessment:</b> Graded on completion and genuine reflection.</p><p><b>Prompt:</b> \"Describe a time you experienced a misunderstanding with a foreigner or someone from a different background. Using the High/Low-Context framework, what do you think happened?\"</p><p><i>(Note: This is a reflective exercise. Please complete this task in a separate document as there is no submission portal here.)</i></p>"
              }
            }
          ]
        }
      ]
    },
    {
      courseId: "pre_02",
      category: "pre-class",
      courseTitle: "English Professional Communication",
      courseDescription: "Ensures faculty have the Upper-Intermediate (B2) English proficiency required for COIL.\nFocuses on skills for international negotiation, academic discussion, and spontaneous problem-solving.",
      modules: [
        {
          moduleId: "epc_m1",
          moduleTitle: "B2 English Proficiency for COIL",
          steps: [
            {
              stepId: "epc_m1_s1",
              stepTitle: "Requirement",
              type: "content",
              content: {
                title: "Introduction",
                customPromptHtml: "<p><b>Requirement for Teachers:</b> All teachers participating in the COIL program must have a minimum B2 level (CEFR). This is necessary to manage the complex negotiations, nuanced academic discussions, and spontaneous problem-solving required in a COIL partnership.</p><p>For faculty who do not yet meet the B2 level, we recommend the program at Wall Street English. Their blended model is ideal for busy professionals seeking to reach B2 proficiency.</p><p><a href='https://wallstreetenglish.edu.vn/' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Wall Street English Vietnam</a></p><p>Why? A B2 level, as defined by the Common European Framework of Reference for Languages (CEFR), is about more than grammar. It's about functional competence.</p>"
              }
            },
            {
              stepId: "epc_m1_s2",
              stepTitle: "B2 Level Criteria",
              type: "content",
              content: {
                title: "Criteria",
                customPromptHtml: "<p>A teacher at the B2 level should be able to:</p><ul class='list-disc list-inside space-y-1'><li><b>Understand complex ideas:</b> Grasp the main points of complex text on both concrete and abstract topics, including technical discussions in their field of specialization.</li><li><b>Interact with fluency:</b> Communicate with a degree of fluency and spontaneity that makes regular interaction with native speakers possible without significant strain for either party.</li><li><b>Produce clear, detailed text:</b> Write clear, detailed text on a wide range of subjects.</li><li><b>Explain a viewpoint:</b> Clearly explain a viewpoint on a topical issue, outlining the advantages and disadvantages of various options.</li></ul>"
              }
            },
            {
              stepId: "epc_m1_q1",
              stepTitle: "Quiz: Question 1",
              type: "quiz",
              quiz: {
                question: "Why is a B2 'Upper-Intermediate' level, rather than a B1 'Intermediate' level, considered the minimum for COIL?",
                options: [
                  { text: "B1 is only for simple tourism; B2 is for academic work.", isCorrect: false },
                  { text: "B1 is for people who cannot write emails, while B2 is for people who can.", isCorrect: false },
                  { text: "B2 is required for handling spontaneous, complex negotiations and academic discussions, not just simple, predictable conversations.", isCorrect: true },
                  { text: "B2 is the same level as a native speaker.", isCorrect: false }
                ],
                feedback: { correct: "Correct! B2 is necessary for the complex, spontaneous nature of COIL collaborations.", incorrect: "Incorrect. The correct answer is C." }
              }
            },
            {
              stepId: "epc_m1_q2",
              stepTitle: "Quiz: Question 2",
              type: "quiz",
              quiz: {
                question: "A B2-level teacher should be able to 'interact with fluency and spontaneity.' In a COIL context, this is most important for:",
                options: [
                  { text: "Reading academic articles in their field.", isCorrect: false },
                  { text: "Writing a perfect, error-free syllabus.", isCorrect: false },
                  { text: "Problem-solving with a partner teacher in a live meeting when a student activity unexpectedly fails.", isCorrect: true },
                  { text: "Understanding all the slang in a student video.", isCorrect: false }
                ],
                feedback: { correct: "Correct! Spontaneity is crucial for live, unscripted problem-solving.", incorrect: "Incorrect. The correct answer is C." }
              }
            },
            {
              stepId: "epc_m1_q3",
              stepTitle: "Quiz: Question 3",
              type: "quiz",
              quiz: {
                question: "The B2 criteria mention understanding 'technical discussions in their field.' This competency is essential for which COIL task?",
                options: [
                  { text: "Designing a course icebreaker about food or hobbies.", isCorrect: false },
                  { text: "Negotiating the specific academic learning outcomes and assessment criteria for a shared project.", isCorrect: true },
                  { text: "Scheduling meeting times with a partner.", isCorrect: false },
                  { text: "Replying to simple student emails about deadlines.", isCorrect: false }
                ],
                feedback: { correct: "Correct! Discussing learning outcomes and assessments requires precise, technical language in one's academic field.", incorrect: "Incorrect. The correct answer is B." }
              }
            },
            {
              stepId: "epc_m1_q4",
              stepTitle: "Quiz: Question 4",
              type: "quiz",
              quiz: {
                question: "If a teacher's English level is B1 (Intermediate), what is the most likely challenge they will face in a COIL partnership?",
                options: [
                  { text: "They will not be able to turn on their camera in Zoom.", isCorrect: false },
                  { text: "They will understand the main topic but struggle to express nuanced opinions or disagree politely, which can lead to misunderstandings.", isCorrect: true },
                  { text: "They will not know any vocabulary in their own academic field.", isCorrect: false },
                  { text: "They will be unable to use Google Translate.", isCorrect: false }
                ],
                feedback: { correct: "Correct! The primary challenge for a B1 speaker is the lack of nuance and complexity in their expression, which is vital for professional collaboration.", incorrect: "Incorrect. The correct answer is B." }
              }
            },
            {
              stepId: "epc_m1_q5",
              stepTitle: "Quiz: Question 5",
              type: "quiz",
              quiz: {
                question: "What is the primary reason for requiring a minimum B2 level for all COIL teachers?",
                options: [
                  { text: "To make sure all teachers have a high-status certificate to show.", isCorrect: false },
                  { text: "To ensure teachers can publish research in English journals.", isCorrect: false },
                  { text: "To ensure the teacher has the communication tools to manage a successful collaboration and support students, reducing the risk of project failure.", isCorrect: true },
                  { text: "To prove that our university's faculty is the best.", isCorrect: false }
                ],
                feedback: { correct: "Correct! The B2 requirement is a practical measure to ensure the collaboration is successful and students are well-supported.", incorrect: "Incorrect. The correct answer is C." }
              }
            }
          ]
        }
      ]
    },
    {
      courseId: "pre_03",
      category: "pre-class",
      courseTitle: "COIL Tech Foundations",
      courseDescription: "A 2-week module providing faculty with minimum digital skills to host and manage COIL activities.\nFocuses on Microsoft Teams for meetings, channel coordination, and file management.",
      modules: [
        {
          moduleId: "tech_m1",
          moduleTitle: "Module 2.1: Hosting Virtual Meetings in Teams",
          steps: [
            {
              stepId: "tech_m1_s1",
              stepTitle: "Introduction & Resources",
              type: "content",
              content: {
                title: "Objective, Content, and Assignment",
                customPromptHtml: "<p><b>Objective:</b> To schedule, host, and manage a synchronous COIL meeting in Microsoft Teams.</p><h4 class='font-bold mt-4'>Content:</h4><ul class='list-disc list-inside space-y-1'><li>Guided video covering scheduling, 'Meeting Options,' managing participants, breakout rooms, and recording.</li></ul><h4 class='font-bold mt-4'>Video User Manuals (English):</h4><ul class='list-disc list-inside space-y-1'><li><a href='https://support.microsoft.com/en-us/office/microsoft-teams-video-training-4f108e54-240b-4351-8084-b1089f0d21d7' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Official Microsoft Teams Video Training (General Resource)</a></li><li><a href='https://support.microsoft.com/en-us/office/roles-in-a-teams-meeting-c16fa7d0-1666-4dde-8686-0a0bfe16e019' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>How to manage Roles in a Teams meeting (Host Controls)</a></li><li><a href='https://support.microsoft.com/en-us/office/record-a-meeting-in-teams-34dfbe7f-b07d-4a27-b4c6-de62f1348c24' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>How to Record a meeting in Teams (Recording)</a></li></ul><h4 class='font-bold mt-4'>Output:</h4><p>A 30-second video of the faculty member screen-sharing a document in a Teams call.</p><h4 class='font-bold mt-4'>Assignment:</h4><p>Watch the videos, practice the skills.</p>"
              }
            },
            {
              stepId: "tech_m1_q1",
              stepTitle: "Quiz: Question 1",
              type: "quiz",
              quiz: {
                question: "You need to schedule a kick-off meeting with your partner teacher who is at another university. What is the most important step?",
                options: [
                  { text: "Start the meeting immediately and call them.", isCorrect: false },
                  { text: "Go to the Teams Calendar, create a 'New meeting,' and type their full email address into the 'Add required attendees' box.", isCorrect: true },
                  { text: "Only create the meeting in a 'Channel' so your students can see it.", isCorrect: false },
                  { text: "Book a physical room in the system.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The correct method is to schedule via the calendar and invite them using their email address." }
              }
            },
            {
              stepId: "tech_m1_q2",
              stepTitle: "Quiz: Question 2",
              type: "quiz",
              quiz: {
                question: "You are hosting a meeting and want to ensure only you and your partner teacher can share screens. Where do you find this setting?",
                options: [
                  { text: "In the 'Chat' panel.", isCorrect: false },
                  { text: "In the 'Participants' panel, next to your name.", isCorrect: false },
                  { text: "In the 'More (...)' menu, under 'Meeting options,' then change 'Who can present?'", isCorrect: true },
                  { text: "You must set this before the meeting starts, and it cannot be changed.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. Presentation roles can be changed under 'Meeting options'." }
              }
            },
            {
              stepId: "tech_m1_q3",
              stepTitle: "Quiz: Question 3",
              type: "quiz",
              quiz: {
                question: "A participant has joined the meeting and has very loud background noise. As the host, what is the best action?",
                options: [
                  { text: "End the meeting for everyone.", isCorrect: false },
                  { text: "Open the 'Participants' panel, find their name, click '...' and select 'Mute participant.'", isCorrect: true },
                  { text: "Send them a private email asking them to mute.", isCorrect: false },
                  { text: "Announce to the whole group, 'Someone is not muted, please check your microphone!'", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The host can directly mute participants through the 'Participants' panel." }
              }
            },
            {
              stepId: "tech_m1_q4",
              stepTitle: "Quiz: Question 4",
              type: "quiz",
              quiz: {
                question: "You want to divide your 20 students into 5 small groups for a discussion. What is the most efficient way to do this in the meeting?",
                options: [
                  { text: "Tell the students to form 5 new meetings on their own.", isCorrect: false },
                  { text: "Click the 'Breakout rooms' icon, set the number of rooms to 5, and choose 'Automatically' to assign students.", isCorrect: true },
                  { text: "Manually create 5 new 'Channel' meetings and ask students to join them.", isCorrect: false },
                  { text: "This feature is not available for hosts.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. Teams has a built-in 'Breakout rooms' feature for this purpose." }
              }
            },
            {
              stepId: "tech_m1_q5",
              stepTitle: "Quiz: Question 5",
              type: "quiz",
              quiz: {
                question: "Your partner teacher in a different time zone cannot attend a live meeting. What is the best way to coordinate this and share the information?",
                options: [
                  { text: "Cancel the meeting and try to reschedule for next month.", isCorrect: false },
                  { text: "Tell the partner to ask students what happened.", isCorrect: false },
                  { text: "As the host, go to 'More actions (...)' and select 'Start recording.' After the meeting, share the recording file.", isCorrect: true },
                  { text: "Type everything that is said in the chat box.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. Recording the meeting is the most effective way to share it with those who cannot attend live." }
              }
            }
          ]
        },
        {
          moduleId: "tech_m2",
          moduleTitle: "Module 2.2: Coordinating Collaboration in Teams",
          steps: [
            {
              stepId: "tech_m2_s1",
              stepTitle: "Introduction & Resources",
              type: "content",
              content: {
                title: "Objective, Content, and Assignment",
                customPromptHtml: "<p><b>Objective:</b> To create, organize, and manage a 'Team' for asynchronous COIL collaboration.</p><h4 class='font-bold mt-4'>Content:</h4><ul class='list-disc list-inside space-y-1'><li>Guided video covering creating Teams, Channels (Standard vs. Private), managing the 'Files' tab, and posting vs. replying.</li></ul><h4 class='font-bold mt-4'>Video User Manuals (English):</h4><ul class='list-disc list-inside space-y-1'><li><a href='https://support.microsoft.com/en-us/office/get-started-with-teams-and-channels-df323ae6-18a3-4552-8798-6362d1a3c743' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>How to use teams and channels (Overview)</a></li><li><a href='https://support.microsoft.com/en-us/office/collaborate-on-files-in-microsoft-teams-9b200289-dbac-4823-85bd-628a5c7bb0ae' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>All about file sharing in Microsoft Teams (Files)</a></li></ul><h4 class='font-bold mt-4'>Output:</h4><p>A 'Hello' post in the correct class 'Team' Channel; a 1-paragraph summary of an English-language document.</p><h4 class='font-bold mt-4'>Assignment:</h4><p>Watch the videos, complete the two output tasks.</p>"
              }
            },
            {
              stepId: "tech_m2_q1",
              stepTitle: "Quiz: Question 1",
              type: "quiz",
              quiz: {
                question: "You are coordinating a new COIL project. What is the first thing you should create to be the central 'hub' for all students, files, and faculty?",
                options: [
                  { text: "A new 1-on-1 chat with your partner.", isCorrect: false },
                  { text: "A new 'Team' and invite all members (your students, your partner, and their students).", isCorrect: true },
                  { text: "A folder on your desktop.", isCorrect: false },
                  { text: "A new post in an old, existing Team.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. A new 'Team' serves as the central hub for a project." }
              }
            },
            {
              stepId: "tech_m2_q2",
              stepTitle: "Quiz: Question 2",
              type: "quiz",
              quiz: {
                question: "Your new Team is becoming messy. Students are posting icebreakers, faculty are discussing grades, and project files are mixed together. What is the best way to coordinate this?",
                options: [
                  { text: "Tell everyone to stop posting and use email only.", isCorrect: false },
                  { text: "Delete the Team and start over.", isCorrect: false },
                  { text: "Create separate 'Channels' (e.g., 'Student Icebreakers,' 'Group 1 Project,' 'Faculty Only') to organize conversations.", isCorrect: true },
                  { text: "Use the 'General' channel for everything but tell students to use 'Reply.'", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. Channels are the primary way to organize conversations and files within a Team." }
              }
            },
            {
              stepId: "tech_m2_q3",
              stepTitle: "Quiz: Question 3",
              type: "quiz",
              quiz: {
                question: "You and your partner teacher need a private space in the Team to discuss student grades, which students cannot see. What should you create?",
                options: [
                  { text: "A 'Standard' Channel and name it 'Do Not Enter.'", isCorrect: false },
                  { text: "A 'Private' Channel and add only the faculty as members.", isCorrect: true },
                  { text: "A new post in the 'General' channel.", isCorrect: false },
                  { text: "A private 1-on-1 chat (this is an option, but not within the Team structure).", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. A 'Private' Channel is the correct tool for confidential conversations within a Team." }
              }
            },
            {
              stepId: "tech_m2_q4",
              stepTitle: "Quiz: Question 4",
              type: "quiz",
              quiz: {
                question: "You want to make sure all students can easily find the 'Syllabus' and 'Project Guidelines' for the entire course. What is the best coordination practice?",
                options: [
                  { text: "Upload the files to the 'Files' tab in the 'General' Channel, and then 'Pin' the files or make a post linking to them.", isCorrect: true },
                  { text: "Send the files in a chat message to each student.", isCorrect: false },
                  { text: "Create a new Channel for every single file.", isCorrect: false },
                  { text: "Ask students to email you when they need the files.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The 'General' channel's 'Files' tab is the best place for course-wide documents." }
              }
            },
            {
              stepId: "tech_m2_q5",
              stepTitle: "Quiz: Question 5",
              type: "quiz",
              quiz: {
                question: "A student has posted a message that is inappropriate or in the wrong Channel. As the Team 'Owner' (host), what coordination actions can you take?",
                options: [
                  { text: "You can do nothing; all posts are permanent.", isCorrect: false },
                  { text: "You can click the '...' on the student's post and select 'Delete' to remove it.", isCorrect: true },
                  { text: "You must report the student to the IT department.", isCorrect: false },
                  { text: "You must reply to the post and ask the student to delete it.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. Team owners have the ability to delete any message in the Team." }
              }
            }
          ]
        }
      ]
    },
    {
      courseId: "pre_04",
      category: "pre-class",
      courseTitle: "Intercultural & COIL Pedagogy",
      courseDescription: "A course moving faculty from cultural 'awareness' to practical 'application.'\nParticipants will learn to design effective COIL tasks and manage intercultural student dynamics.",
      modules: [
        {
          moduleId: "icp_m1",
          moduleTitle: "Module 3.1: COIL Design",
          steps: [
            {
              stepId: "icp_m1_s1",
              stepTitle: "COIL Design Phases",
              type: "content",
              content: {
                title: "COIL Design",
                customPromptHtml: "<p><a href='#' onclick='return false;' class='text-blue-400 hover:underline'>Click here to watch the video</a></p><p>As you noted, it emphasizes the four key phases of a successful COIL project: Ice Breaker, Organization & Collaboration, Reflection.</p>"
              }
            },
            {
              stepId: "icp_m1_s2",
              stepTitle: "Phase 1: Icebreaker",
              type: "content",
              content: {
                title: "Icebreaker",
                customPromptHtml: "<h4>Icebreaker: To get to know each other and build trust.</h4><p><b>What it is:</b> A simple, fun, non-graded (or credit/no-credit) activity.</p><p><b>Why it's critical:</b></p><ul class='list-disc list-inside space-y-1'><li><b>Builds Trust:</b> Students move from seeing \"strangers\" to seeing \"people.\" This is vital for navigating future conflict.</li><li><b>Tests Technology:</b> This is your first and safest time to find out who can't access Padlet, use MS Teams, or upload a video.</li><li><b>\"Big C\" Exchange:</b> It's the perfect time for the \"Big C\" (surface culture) exchange. Students can safely share pictures of food, pets, family, or their daily commute.</li></ul><p><a href='https://www.hva.nl/binaries/content/assets/faculteiten/fbe/coil/icebreakers/coil-icebreakers.pdf' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>COIL Icebreaker Examples</a></p>"
              }
            },
            {
              stepId: "icp_m1_s4",
              stepTitle: "Phase 2: Organization & Collaboration",
              type: "content",
              content: {
                title: "Organization & Collaboration",
                customPromptHtml: "<h4>Organization & Collaboration: Where teams are formed, and tasks/timelines are planned. How students create something together.</h4><p><b>What it is:</b> A graded, academic project where students from both countries must create one, new, shared deliverable.</p><p><b>What you need to do:</b></p><ul class='list-disc list-inside space-y-2'><li><b>Intentionally form groups:</b> Do not let students self-select. Create intentionally mixed groups of 4-6 students (e.g., 2 from your class, 3 from the partner class).</li><li><b>Provide a \"Team Charter\" Template:</b> This is your most important tool for managing \"Little C\" clashes. A Team Charter is a document each group must co-author and submit in Week 1. It forces them to discuss:<ul class='list-disc list-inside ml-4 mt-1 space-y-1'><li><b>Roles:</b> Who is the \"Coordinator\" (schedules meetings)? Who is the \"Editor\" (checks language)?</li><li><b>Tools:</b> \"We will use MS Teams Chat for all communication.\"</li><li><b>Rules:</b> \"We agree to the '24-hour reply' rule.\"</li><li><b>Conflict Plan:</b> \"If we have a conflict, we will first... (e.g., tag our Coordinator) before we contact the professors.\"</li></ul></li><li><b>Design a truly collaborative task.</b> This is the \"Collaborative vs. Comparative\" trap.<ul class='list-disc list-inside ml-4 mt-1 space-y-1'><li><b>Bad (Comparative):</b> \"Compare marketing in our two countries.\" (Students can do this alone.)</li><li><b>Good (Collaborative):</b> \"Form one, joint team to create a single marketing plan for a new product to be launched in both of your countries.\" (Students need each other to succeed.)</li></ul></li></ul>"
              }
            },
            {
              stepId: "icp_m1_s5",
              stepTitle: "Phase 3: Reflection",
              type: "content",
              content: {
                title: "Reflection",
                customPromptHtml: "<h4>Reflection: Where students reflect on what they learned (the academic content) and how they learned (the intercultural process).</h4><p><b>What it is:</b> An individual, graded assignment where students analyze their intercultural experience.</p><p><b>Why it's critical:</b> Without this step, students may only remember the frustration of the project. The reflection is what turns that frustration into learning. It allows them to connect the \"pain points\" (like a direct email) to the \"Little C\" concepts (like High/Low-Context communication).</p><p><b>What you need to do:</b></p><ul class='list-disc list-inside space-y-2'><li><b>Make it a graded assignment:</b> Use a journal, a short essay, or a 3-minute reflection video.</li><li><b>Provide specific prompts:</b> Do not ask, \"Did you like the project?\"<ul class='list-disc list-inside ml-4 mt-1 space-y-1'><li><b>Bad Prompts:</b> \"Was this fun? Was it hard?\"</li><li><b>Good Prompts:</b> \"What was the biggest 'Little C' cultural challenge your group faced?\" \"Describe a communication misunderstanding and how you solved it.\" \"What did you learn about your own cultural assumptions and work style?\" \"What is one strategy you will use in your future career when working on a global team?\"</li></ul></li></ul>"
              }
            }
          ]
        },
        {
          moduleId: "icp_m2",
          moduleTitle: "Module 3.2: Common COIL Student Pain Points",
          steps: [
            {
              stepId: "icp_m2_s1",
              stepTitle: "Introduction & Pain Points",
              type: "content",
              content: {
                title: "Common COIL Student Pain Points",
                customPromptHtml: "<p>Common challenges faculty and students face in COIL projects. Being aware of these \"pain points\" allows you to plan for them.</p><div class='space-y-4 mt-4'><div class='p-4 bg-gray-700 rounded-lg'><h4>1. Language Anxiety</h4><p>Students (even those with good English) often feel \"shy\" or \"afraid\" to speak in live meetings. They worry about their accent or making a grammar mistake, so they stay silent.</p><p><b>Solution:</b> Use asynchronous (text-based) icebreakers first. Provide \"sentence starters\" (e.g., \"I have a question about...\") to help them.</p></div><div class='p-4 bg-gray-700 rounded-lg'><h4>2. Group Work Conflicts (\"Free-Riders\" or \"Ghosting\")</h4><p>This is the most common problem. One student does all the work (a \"free-rider\") or a student completely disappears and doesn't answer messages (\"ghosting\"). This is often a cultural 'Little C' issue (e.g., a High-Context student \"ghosting\" to avoid direct conflict).</p><p><b>Solution:</b> You must scaffold group work. Assign specific roles (e.g., Coordinator, Researcher, Editor, Presenter) so everyone has a clear job. Require a simple, weekly \"group progress report\" to ensure accountability.</p></div><div class='p-4 bg-gray-700 rounded-lg'><h4>3. Time Zone Confusion</h4><p>Students miscalculate time zones and miss synchronous meetings.</p><p><b>Solution:</b> Never just write \"The meeting is at 9:00 AM.\" Always write, \"The meeting is at 9:00 AM (Your Time) / 9:00 PM (Partner's Time).\" Use a tool like World Time Buddy in your syllabus.</p></div><div class='p-4 bg-gray-700 rounded-lg'><h4>4. Technology Barriers</h4><p>Students can't access a specific tool, the internet is unstable, or they aren't comfortable with the platform (e.g., Teams).</p><p><b>Solution:</b> Use the icebreaker task to test all the technology (e.g., \"Post your video to Flipgrid\"). Have a \"Plan B\" (like sharing files in the Teams chat) if a tool fails.</p></div></div>"
              }
            }
          ]
        },
        {
          moduleId: "icp_m3",
          moduleTitle: "Course 3: Final Reflection Quiz",
          steps: [
            {
              stepId: "icp_m3_q1",
              stepTitle: "Final Quiz: Question 1",
              type: "quiz",
              quiz: {
                question: "According to the Iceberg Model of Culture (M3.1), what is the \"Big C' Trap\" in COIL?",
                options: [
                  { text: "Faculty spend too much time on complex academic theory.", isCorrect: false },
                  { text: "Students only compare surface-level facts (e.g., food, holidays) and fail to engage in deeper collaboration.", isCorrect: true },
                  { text: "The technology chosen for the project is too complicated.", isCorrect: false },
                  { text: "Students' final reflections are too descriptive and not analytical.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The correct answer is B. The 'Big C' trap is when collaboration remains at the surface level." }
              }
            },
            {
              stepId: "icp_m3_q2",
              stepTitle: "Final Quiz: Question 2",
              type: "quiz",
              quiz: {
                question: "A student from a Low-Context culture sends a direct email to their group: \"Your section is late. Please send it now.\" How might a student from a High-Context culture perceive this message? (M3.1)",
                options: [
                  { text: "As clear, efficient, and helpful.", isCorrect: false },
                  { text: "As rude, aggressive, and damaging to the group's harmony.", isCorrect: true },
                  { text: "As a good example of strong leadership.", isCorrect: false },
                  { text: "As a sign that the professor should be involved.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The correct answer is B. Direct communication can be perceived as rude in High-Context cultures." }
              }
            },
            {
              stepId: "icp_m3_q3",
              stepTitle: "Final Quiz: Question 3",
              type: "quiz",
              quiz: {
                question: "What is the primary pedagogical purpose of an \"Icebreaker\" activity in the 3-part COIL task design? (M3.2)",
                options: [
                  { text: "To assign final grades for participation.", isCorrect: false },
                  { text: "To test the students' academic knowledge before the main task.", isCorrect: false },
                  { text: "To build trust, test technology, and establish group rapport in a low-risk environment.", isCorrect: true },
                  { text: "To give the faculty from both sides a chance to meet.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The correct answer is C. Icebreakers are for building rapport and testing tech in a low-stakes way." }
              }
            },
            {
              stepId: "icp_m3_q4",
              stepTitle: "Final Quiz: Question 4",
              type: "quiz",
              quiz: {
                question: "Which of the following is the best example of a truly collaborative task, not just a comparative one? (M3.2)",
                options: [
                  { text: "Students from both countries write an essay comparing their local holidays.", isCorrect: false },
                  { text: "Students co-author a single research paper or business plan to solve a shared problem.", isCorrect: true },
                  { text: "Students interview each other about their families and present the findings.", isCorrect: false },
                  { text: "Students from each university present their own projects to the other class.", isCorrect: false }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The correct answer is B. A collaborative task requires students to create a single, joint output." }
              }
            },
            {
              stepId: "icp_m3_q5",
              stepTitle: "Final Quiz: Question 5",
              type: "quiz",
              quiz: {
                question: "A faculty member notices their students are \"ghosting\" their international partners in group work. What is the best \"scaffolding\" strategy to solve this? (M3.3)",
                options: [
                  { text: "Tell the international partners to be more patient and wait for a reply.", isCorrect: false },
                  { text: "Do nothing; students must learn to solve their own problems.", isCorrect: false },
                  { text: "Send a warning email to the entire class about the importance of communication.", isCorrect: false },
                  { text: "Require each group to submit a weekly \"progress report\" and assign specific roles (e.g., \"Coordinator\") to each member.", isCorrect: true }
                ],
                feedback: { correct: "Correct!", incorrect: "Incorrect. The correct answer is D. Scaffolding involves providing structure like progress reports and roles to ensure accountability." }
              }
            }
          ]
        }
      ]
    },
    // In-Class
    {
      courseId: "in_class_handbook",
      category: "in-class",
      courseTitle: "Teacher Operation Handbook: Facilitating COIL",
      courseDescription: "A handbook providing actionable steps, strategies, and checklists for managing digital tools, facilitating intercultural teams, and structuring COIL modules.",
      modules: [
        {
          moduleId: "handbook_m1",
          moduleTitle: "Module 1: Managing Digital Tools",
          steps: [
            {
              stepId: "h1_s1_content",
              stepTitle: "1.1a: Real-time Interaction (Synchronous)",
              type: "content",
              content: { 
                title: "Real-time Interaction (Synchronous)",
                customPromptHtml: "<p>Real-time Interaction revolves around:</p><ul class='list-disc list-inside space-y-2'><li><b>Live Lectures:</b> Providing immediate opportunities for learners to ask questions and receive real-time feedback.</li><li><b>Group Meetings:</b> For collaborative problem-solving, perspective sharing, and application of theoretical knowledge.</li><li><b>Dynamic Discussions:</b> Encouraging constructive debates to deepen understanding.</li></ul><h4 class='font-bold mt-4'>To maximize interaction, utilize:</h4><ul class='list-disc list-inside space-y-2'><li><strong>Breakout Rooms:</strong> For small group discussion (10-15 minutes).</li><li><strong>Polls:</strong> For quick checks on understanding.</li><li><strong>Virtual Whiteboards:</strong> For collaborative brainstorming.</li></ul><h4 class='font-bold mt-4'>Essential etiquette includes:</h4><ul class='list-disc list-inside space-y-2'><li>Instructing students to <strong>Mute</strong> when not speaking.</li><li>Using the <strong>'Raise Hand' feature</strong> to manage speaking order.</li></ul>"
              },
            },
            {
              stepId: "h1_s1_table",
              stepTitle: "1.1b: Synchronous Tool Checklist",
              type: "structuredData",
              structuredData: {
                type: "table",
                table: {
                  headers: ["Actionable Checklist Item", "Specific Tool Examples"],
                  rows: [
                    ["Plan and prepare Breakout Rooms scenarios", "Zoom, Microsoft Teams, Google Meet"],
                    ["Create pre-prepared Polls for quick checks", "Zoom Polls, Kahoot!, Mentimeter"],
                    ["Set up a Virtual Whiteboard for collaborative brainstorming", "Zoom Whiteboard, Google Jamboard, Miro"],
                    ["Instruct students to use the 'Raise Hand' feature", "Zoom Raise Hand, Teams Raise Hand, Google Meet Raise Hand"]
                  ]
                }
              }
            },
            {
              stepId: "h1_s2_content",
              stepTitle: "1.2a: Flexible Interaction (Asynchronous)",
              type: "content",
              content: {
                title: "Flexible Mode of Interaction (Asynchronous)",
                customPromptHtml: "<p>The Flexible Mode of Interaction serves several purposes:</p><ul class='list-disc list-inside space-y-2'><li><b>Content Delivery:</b> Provides core learning materials that learners can access at their convenience.</li><li><b>In-depth Discussion:</b> Allows learners time to formulate thoughtful responses and engage in asynchronous, detailed exchanges.</li><li><b>Detailed Feedback:</b> Ideal for instructors to provide comprehensive, individualized commentary on assignments.</li><li><b>Flexibility:</b> Offers adaptability for learners with different schedules.</li></ul><h4 class='font-bold mt-4'>To maximize flexibility:</h4><ul class='list-disc list-inside space-y-2'><li>Design effective <strong>Forums</strong> with open/provocative questions.</li><li>Replace long lectures with short, focused <strong>Micro-lectures</strong>.</li></ul><h4 class='font-bold mt-4'>To establish structure:</h4><ul class='list-disc list-inside space-y-2'><li>Set firm deadlines for assignments and discussion posts.</li><li>Outline clear weekly tasks with a simple, scannable checklist.</li></ul>"
              }
            },
            {
              stepId: "h1_s2_table",
              stepTitle: "1.2b: Asynchronous Tool Checklist",
              type: "structuredData",
              structuredData: {
                type: "table",
                table: {
                  headers: ["Actionable Checklist Item", "Specific Tool Examples"],
                  rows: [
                    ["Design Forums with open/provocative questions and set peer response expectations", "Moodle Forums, Canvas Discussion Boards, Slack Channels"],
                    ["Record and edit short, focused Micro-lectures (ideally with subtitles)", "Loom, OBS Studio, Screencastify, YouTube Studio"],
                    ["Provide a clear weekly checklist/agenda of required activities", "Learning Management System Module/Page (e.g., Canvas Pages), Google Docs, Notion"],
                    ["Create a dedicated 'Help' or 'Q&A' space", "Specific Learning Management System Discussion Forum, Dedicated Slack Channel"]
                  ]
                }
              }
            }
          ]
        },
        {
          moduleId: "handbook_m2",
          moduleTitle: "Module 2: Facilitating Intercultural Student Teamwork & Conflict Resolution",
          steps: [
            {
              stepId: "h2_s1_content",
              stepTitle: "2.1a: Intercultural Collaboration",
              type: "content",
              content: {
                title: "Facilitating Intercultural Collaboration",
                customPromptHtml: "<p>Facilitating intercultural collaboration involves several key strategies:</p><ul class='list-disc list-inside space-y-2'><li><strong>Strategic Group Formation:</strong> Maximize exposure to diverse perspectives by ensuring cultural, national, or disciplinary diversity in each team.</li><li><strong>Intercultural Icebreaker Activities:</strong> Build rapport and humanize team members before task work begins.</li><li><strong>Encourage a \"Group Contract\":</strong> Proactively establish norms, expectations, and accountability. This formal document should specify Roles & Responsibilities, Communication Methods, Meeting Schedules, and an Internal Conflict Resolution Process.</li><li><strong>Educate on Differences (Mini-Training):</strong> Help students frame differing behaviors as cultural, not personal, flaws.</li></ul>"
              }
            },
            {
              stepId: "h2_s1_list",
              stepTitle: "2.1b: Group Contract Items",
              type: "structuredData",
              structuredData: {
                type: "list_points",
                list_points: {
                  heading: "Group Contract Mandatory Items:",
                  points: [
                    "Roles & Responsibilities (who does what)",
                    "Preferred Communication Methods (channel and expected response time)",
                    "Agreed Meeting Schedules (mandatory times and punctuality expectations)",
                    "Internal Conflict Resolution Process (initial steps before involving the instructor)"
                  ]
                }
              }
            },
            {
              stepId: "h2_s2_content",
              stepTitle: "2.2a: Conflict Resolution Strategies",
              type: "content",
              content: {
                title: "Conflict Resolution Strategies",
                customPromptHtml: "<p>Effective conflict resolution includes the following strategies:</p><ul class='list-disc list-inside space-y-2'><li><strong>Establish a Clear Reporting Channel:</strong> Ensure students know the chain of command when internal team efforts fail.</li><li><strong>Use the 5-Step Mediation Process:</strong> When intervention is required, follow these steps:</li></ul><ol class='list-decimal list-inside space-y-2 mt-2 ml-4'><li><strong>Non-Judgmental Listening:</strong> Meet with each party individually and confidentially.</li><li><strong>Identify Core Cause:</strong> Analyze the root of the conflict (personality, task, or cultural misunderstanding).</li><li><strong>Joint Meeting (if needed):</strong> Facilitate a controlled discussion, emphasizing 'I' statements.</li><li><strong>Future-Oriented Solution:</strong> Guide the team to collaboratively develop and commit to specific action steps.</li><li><strong>Document & Follow Up:</strong> Record the resolution and check on the team's progress later.</li></ol>"
              }
            },
            {
              stepId: "h2_s2_table",
              stepTitle: "2.2b: Conflict Mediation Checklist",
              type: "structuredData",
              structuredData: {
                type: "table",
                table: {
                  headers: ["Mediation Step", "Actionable Checklist Item"],
                  rows: [
                    ["1. Non-Judgmental Listening", "Schedule individual, confidential meetings with all involved parties."],
                    ["2. Identify Core Cause", "Distinguish between Task, Process, or Relationship conflict."],
                    ["3. Joint Meeting", "If necessary, facilitate a meeting. Set ground rules for respectful communication."],
                    ["4. Future-Oriented Solution", "Guide students to create a written action plan for moving forward."],
                    ["5. Document & Follow Up", "Privately document the agreed-upon solution and schedule a brief check-in meeting."]
                  ]
                }
              }
            }
          ]
        },
        {
          moduleId: "handbook_m3",
          moduleTitle: "Module 3: Structuring & Assessing COIL Modules",
          steps: [
            {
              stepId: "h3_s1_content",
              stepTitle: "3.1a: Structuring COIL Modules",
              type: "content",
              content: {
                title: "Structuring COIL Modules",
                customPromptHtml: "<p>Structuring COIL modules effectively involves a clear sequence of activities designed to build skills and knowledge progressively.</p><ol class='list-decimal list-inside space-y-2'><li><strong>Phase 1: Foundation Building (Weeks 1-2):</strong> Focus on icebreakers, technology orientation, and team formation. The goal is to build trust and technical fluency.</li><li><strong>Phase 2: Collaborative Project Work (Weeks 3-6):</strong> This is the core of the COIL experience. Students work in their intercultural teams on the main academic task. Regular check-ins are crucial.</li><li><strong>Phase 3: Culmination & Reflection (Weeks 7-8):</strong> Teams finalize and present their work. This phase must include individual reflection on both the academic content and the intercultural process.</li></ol>"
              }
            },
            {
              stepId: "h3_s1_example",
              stepTitle: "3.1b: Example COIL Project",
              type: "structuredData",
              structuredData: {
                type: "example_quote",
                example_quote: {
                  heading: "Example: 'Comparative vs. Collaborative' Task Design",
                  context: "A common pitfall is designing a task that is merely comparative, not truly collaborative. Students must need each other to complete the final product.",
                  quote: "<strong>Comparative (Less Effective):</strong> 'Each student writes a report on marketing in their own country, then the group compares them.'\n\n<strong>Collaborative (More Effective):</strong> 'The international team must create a single, unified marketing plan for a new product to be launched in both countries.'"
                }
              }
            },
            {
              stepId: "h3_s2_content",
              stepTitle: "3.2a: Assessing COIL Work",
              type: "content",
              content: {
                title: "Assessing COIL Work",
                customPromptHtml: "<p>Assessment in COIL should be multi-faceted, evaluating both the final product and the collaborative process.</p><ul class='list-disc list-inside space-y-2'><li><strong>Product Assessment (Group Grade):</strong> Evaluate the final deliverable (e.g., report, presentation, business plan) against a clear, shared rubric. This grade is typically given to the entire group.</li><li><strong>Process Assessment (Individual Grade):</strong> Assess individual contributions and intercultural competence. This can be done through: <ul class='list-disc list-inside ml-4'><li>Peer evaluations (using a structured form)</li><li>Individual reflection journals or essays</li><li>Instructor observation of team dynamics</li></ul></li></ul><p>Separating product and process assessment ensures individual accountability and rewards the development of crucial intercultural skills.</p>"
              }
            },
            {
              stepId: "h3_s2_list",
              stepTitle: "3.2b: Assessment Checklist",
              type: "structuredData",
              structuredData: {
                type: "list_with_description",
                list_with_description: {
                  heading: "Assessment Design Checklist",
                  description: "When creating your COIL assessment plan, ensure you have: 1) A detailed rubric for the final group project. 2) A structured peer evaluation form. 3) A clear prompt for the individual reflection assignment. 4) A grading scheme that weights both group (product) and individual (process) components."
                }
              }
            }
          ]
        }
      ]
    },
    // Post-Class
    {
      courseId: "post_02",
      category: "post-class",
      courseTitle: "COIL-Specific Collaborative Assessment",
      courseDescription: "Training on assessing group work fairly in a COIL context (especially when partners may have different grading cultures) and using reflection as a formal assessment of both academic content and intercultural learning.",
      modules: [
        {
          moduleId: "c6_m1",
          moduleTitle: "Module 1: The Problem with Single Grades",
          steps: [
            {
              stepId: "c6_m1_s1",
              stepTitle: "Introduction",
              type: "content",
              content: {
                title: "The Problem with Single Grades",
                customPromptHtml: "<p>When we have a great project with poor English, and a weak project with perfect English, what do we do? A single grade is a trap. It's unfair to our students, so we will fix this with a \"Decoupled Rubric\".</p>"
              }
            },
            {
              stepId: "c6_m1_s2",
              stepTitle: "\"Decoupled Rubric\" Template",
              type: "structuredData",
              structuredData: {
                type: "table",
                table: {
                  headers: ["Criteria", "Beginning", "Developing", "Accomplished"],
                  rows: [
                    ["<b>PART 1: CONTENT & ANALYSIS (70%)</b>", "", "", ""],
                    ["Critical Thinking", "Submits work that is only descriptive; does not analyze.", "Provides some analysis, but misses deeper connections.", "Demonstrates deep, insightful analysis and connects ideas."],
                    ["Evidence & Support", "Uses no supporting evidence or makes claims without support.", "Uses basic evidence (e.g., from textbook) but no original research.", "Integrates high-quality, relevant evidence from multiple sources."],
                    ["<b>PART 2: COMMUNICATION & COLLABORATION (30%)</b>", "", "", ""],
                    ["Language Clarity", "Language is a significant barrier to understanding the core ideas.", "Ideas are mostly clear, but with frequent errors that slow the reader.", "Ideas are clearly expressed. Language is used effectively."],
                    ["Teamwork", "Did not engage with partners; work was siloed.", "Participated in team meetings but contributed little.", "Actively collaborated, helped partners, and contributed to group success."]
                  ]
                }
              }
            },
            {
              stepId: "c6_m1_s3",
              stepTitle: "How the Rubric Works",
              type: "content",
              content: {
                title: "How the \"Decoupled Rubric\" Works",
                customPromptHtml: "<p><b>What it is:</b> A simple rubric with two separate categories:</p><ol class='list-decimal list-inside space-y-1 my-2'><li><b>Category 1: Content & Analysis (70% of grade)</b> - Assesses the student's ideas.</li><li><b>Category 2: Communication & Collaboration (30% of grade)</b> - Assesses language, presentation, and teamwork.</li></ol><p><b>Why it works:</b> This tool gives you official permission to give a high grade for excellent ideas, even if the English isn't perfect. This immediately solves your 'fairness' anxiety.</p>"
              }
            }
          ]
        },
        {
          moduleId: "c6_m2",
          moduleTitle: "Module 2: Grading Calibration",
          steps: [
            {
              stepId: "c6_m2_s1",
              stepTitle: "Knowledge Check 1: The Old Way",
              type: "quiz",
              content: {
                title: "Let's practice:",
                customPromptHtml: "<div class='p-3 bg-gray-700 border-l-4 border-cyan-500 my-4 text-sm text-gray-200'>Review the two student projects below.<br><br><ul><li><b>Project A:</b> Deep analysis of a local issue, but with many grammatical errors.</li><li><b>Project B:</b> A fluent, confident presentation with very shallow, descriptive content.</li></ul></div>"
              },
              quiz: {
                question: "Using the old, holistic method, which project would you struggle to grade?",
                options: [
                  { text: "(A) Project A", isCorrect: false },
                  { text: "(B) Project B", isCorrect: false },
                  { text: "(C) Both.", isCorrect: true }
                ],
                feedback: {
                  correct: "Correct! Both projects present a conflict between content and delivery, making them difficult to grade fairly with a single, holistic score.",
                  incorrect: "Not quite. The correct answer is (C) Both, as each project is strong in one area and weak in another, creating a grading dilemma."
                }
              }
            },
            {
              stepId: "c6_m2_s2",
              stepTitle: "Knowledge Check 2: The New Way",
              type: "quiz",
              content: {
                title: "Now, use the new \"Decoupled Rubric.\"",
                customPromptHtml: "<p>Now, let's grade Project A (deep analysis, many errors) using the new rubric. We'll assign a <strong>Content Grade of 9/10</strong> and a <strong>Communication Grade of 5/10</strong>.</p>"
              },
              quiz: {
                question: "With a Content Grade of 9/10 (weighted at 70%) and a Communication Grade of 5/10 (weighted at 30%), what is Project A's final calculated grade?",
                options: [
                  { text: "7.0 / 10", isCorrect: false },
                  { text: "7.8 / 10", isCorrect: true },
                  { text: "8.5 / 10", isCorrect: false }
                ],
                feedback: {
                  correct: "Exactly! You can now reward the student's 9/10 thinking and fairly assess their 5/10 language. The final result is (9 * 0.7) + (5 * 0.3) = 7.8/10.",
                  incorrect: "The calculation is (Content Grade * 70%) + (Communication Grade * 30%). So, (9 * 0.7) + (5 * 0.3) = 6.3 + 1.5 = 7.8. The correct answer is B."
                }
              }
            }
          ]
        },
        {
          moduleId: "c6_m3",
          moduleTitle: "Module 3: Why We Misjudge - \"The Ladder of Inference\"",
          steps: [
            {
              stepId: "c6_m3_s1",
              stepTitle: "Introduction to the \"Ladder\"",
              type: "content",
              content: {
                title: "Module 3: Why We Misjudge - \"The Ladder of Inference\"",
                customPromptHtml: "<p>Why do we <em>really</em> disagree on grades? It's often because we jump up a “ladder” of assumptions. We observe a student's “bad grammar” (Data) and jump to the assumption “they are lazy\" (Belief), which affects our \"grade” (Action). In COIL, this is dangerous because our ladders are built by different cultures. We will learn to stay at the bottom of the ladder: what did I <em>actually</em> see?</p>"
              }
            },
            {
              stepId: "c6_m3_s2",
              stepTitle: "Interactive Activity: Climbing the Ladder",
              type: "quiz",
              content: {
                title: "Read the scenario and identify where the professor “jumped” up the ladder.",
                customPromptHtml: "<div class='p-3 bg-gray-700 border-l-4 border-cyan-500 my-4 text-sm text-gray-200'><b>Scenario:</b> An international partner is 10 minutes late to a Zoom meeting. The NNU professor assumes: “They don't respect me or this project”, and feels angry.</div>"
              },
              quiz: {
                question: "The professor's assumption (“They don't respect me”) is which rung on the ladder?",
                options: [
                  { text: "(A) Observable Data", isCorrect: false },
                  { text: "(B) Selected Data", isCorrect: false },
                  { text: "(C) Assumptions/Beliefs", isCorrect: true }
                ],
                feedback: {
                  correct: "Correct! The observable data was just “10 minutes late”. The belief was \"disrespect”. This jump creates conflict. To fix this, we must go back down the ladder and ask a question: “Is everything okay?\"",
                  incorrect: "Not quite. The correct answer is (C). The *observable data* was '10 minutes late.' The feeling of 'disrespect' is an *assumption* or *belief* based on that data."
                }
              }
            }
          ]
        },
        {
          moduleId: "c6_m4",
          moduleTitle: "Module 4: The Negotiation Script",
          steps: [
            {
              stepId: "c6_m4_s1",
              stepTitle: "Assignment: Write Your Script",
              type: "assignment",
              assignment: {
                title: "Module 4: \"The Negotiation Script\"",
                instructionsHtml: "<p>You will write a “Negotiation Script”—the exact words you would use to explain the “Decoupled Rubric\" to an international partner. This is a low-stakes way to practice a high-stakes conversation.</p><p><b>Instructions:</b> Imagine you need to convince an international partner (who seems to grade differently than you) to use the 'Decoupled Rubric.' Write a short script (approx. 150-200 words) for how you would start this conversation in the text box below.</p>",
                placeholder: "Start writing your negotiation script here..."
              }
            },
            {
              stepId: "c6_m4_s2",
              stepTitle: "Example Submission",
              type: "structuredData",
              structuredData: {
                type: "example_quote",
                example_quote: {
                  heading: "Example of a good submission",
                  context: "",
                  quote: "Hi [Partner Name], I'm so excited to see the final projects. Before we start grading, I'd love to learn your perspective on how we should handle the different student language levels. I've had success with this “Decoupled Rubric” as it helps me separate their content mastery from their language clarity. This way, we can reward their good ideas even if their English isn't perfect. What are your thoughts on this approach for our group?"
                }
              }
            }
          ]
        }
      ]
    },
    {
      courseId: "post_03",
      category: "post-class",
      courseTitle: "Providing Timely & Culturally Sensitive Feedback",
      courseDescription: "Giving feedback in a virtual environment, and how to offer constructive criticism across cultural norms (e.g., direct vs. indirect communication styles).",
      modules: [
        {
          moduleId: "c7_m1",
          moduleTitle: "Module 1: Why is Feedback so Hard? \"Power Distance\"",
          steps: [
            {
              stepId: "c7_m1_s1",
              stepTitle: "Understanding Communication Styles",
              type: "content",
              content: {
                title: "Module 1: Why is Feedback so Hard? \"Power Distance\"",
                customPromptHtml: "<p><b>(\"High-Context vs. Low-Context\")</b></p><p>Why is feedback so hard? In Vietnam, we use \"high-context” communication (polite, indirect). Many international partners use “low-context\" (direct, literal), which can cause wrong feelings to the other. Therefore, the key to resolve this situation is a \"safe\" script.</p><p><b>(Reading: \"Theorist Deep Dive: Hofstede's Power Distance\")</b> The NNU survey data shows 53% of us are anxious about our English, which is often a fear of \"losing face\" or being disrespectful. This is related to <b>Geert Hofstede's \"Power Distance\"</b> theory.</p>"
              }
            },
            {
              stepId: "c7_m1_s2",
              stepTitle: "Power Distance and Sources of Conflict",
              type: "content",
              content: {
                title: "",
                customPromptHtml: "<h3 class='text-xl font-bold text-cyan-400 mb-3'>Key Differences in Power Distance</h3><ul class='list-disc list-inside space-y-2 text-gray-300'><li>In <b>High Power Distance</b> cultures (like Vietnam), feedback from a professor is often seen as a final, high-stakes judgment. Students are less likely to question it.</li><li>In <b>Low Power Distance</b> cultures (like the US or Germany), feedback is often seen as a <b>start</b> of a two-way conversation. A student might openly disagree with a professor.</li></ul><p class='mt-4'>This is a major source of conflict! A direct, “low-context” email from a US partner can feel rude to us. Our \"high-context”, polite feedback can feel vague or dishonest to them.</p>"
              }
            },
            {
              stepId: "c7_m1_s4",
              stepTitle: "Self-Reflection Activity",
              type: "structuredData",
              structuredData: {
                type: 'list_points',
                list_points: {
                  heading: 'Based on your personal experience, answer this:',
                  points: [
                    "Think of a time you received direct, blunt feedback. How did it make you feel?",
                    "How can you use the techniques to give feedback, so it's not a personal judgment, but a discussion about the work?\""
                  ]
                }
              }
            }
          ]
        },
        {
          moduleId: "c7_m2",
          moduleTitle: "Module 2: The \"Feedback Phrase Bank\"",
          steps: [
            {
              stepId: "c7_m2_s1",
              stepTitle: "Category 1: Feedback to NNU Students",
              type: "structuredData",
              content: {
                  title: 'Module 2: The "Feedback Phrase Bank"',
                  customPromptHtml: "<p class='mb-4'><b>Goal:</b> Build their confidence by separating their (good) ideas from their (developing) language skills.</p>"
              },
              structuredData: {
                type: 'table',
                table: {
                  headers: ["Instead of (This lowers confidence):", "Use (This builds confidence):"],
                  rows: [
                    ["\"Your English is bad.\"", "\"Your ideas here are excellent. To make them even more powerful for an international audience, let's focus on...\""],
                    ["\"This is confusing / I don't understand.\"", "\"This is a very strong argument. To make it clearer for our partners, let's try phrasing this key sentence as...\""],
                    ["\"This is just a grammar mistake.\"", "\"I see you used 'X' here. A more common way our partners might say this is 'Y'. Both are correct, but 'Y' might be clearer for them.\""],
                    ["\"Your presentation was weak.\"", "\"I was very impressed with your research. For the next presentation, let's practice how we can make your delivery just as strong as your ideas.\""]
                  ]
                }
              }
            },
            {
              stepId: "c7_m2_s2",
              stepTitle: "Category 2: Feedback to International Students",
              type: "structuredData",
              content: {
                  title: '',
                  customPromptHtml: "<p class='mb-4'><b>Goal:</b> Address cultural or communication gaps politely and directly, without making assumptions.</p>"
              },
              structuredData: {
                type: 'table',
                table: {
                  headers: ["Instead of (This is an attack):", "Use (This is an observation):"],
                  rows: [
                    ["\"That was a rude thing to say in the chat.\"", "\"I noticed your comment in the chat yesterday. It might have been interpreted differently than you intended. Can we talk about that?\""],
                    ["\"You are too blunt.\"", "\"Thank you for that direct feedback. In our team, we're working on a style that blends both directness and indirectness. Let's discuss...\""],
                    ["\"You are not doing your work.\"", "\"I'm glad you have so many great ideas. In this next part, I'd like to make sure we hear from every member of the group.\""]
                  ]
                }
              }
            },
            {
              stepId: "c7_m2_s3",
              stepTitle: "Category 3: Feedback to International Partners (High-Stakes)",
              type: "structuredData",
              content: {
                  title: '',
                  customPromptHtml: "<p class='mb-4'><b>Goal:</b> Use the \"Ladder of Inference\" (Module 1.3) to ask questions, not state accusations. Be collaborative.</p>"
              },
              structuredData: {
                type: 'table',
                table: {
                  headers: ["Instead of (This is an accusation):", "Use (This is an inquiry):"],
                  rows: [
                    ["\"Your grading is wrong / too hard.\"", "\"I'd love to quickly sync up on our grading. I saw this project a bit differently, and I'd love to learn your perspective.\""],
                    ["\"Your students are lazy / not participating.\"", "\"I've noticed some of my students are quieter in the group meetings. I'm wondering if you're seeing the same thing on your side, or if we could brainstorm a way to help them engage?\""],
                    ["\"You missed the deadline.\"", "\"Just checking in on the student reports. Is there anything I can do to help support your side?\""],
                    ["\"Why were you late?\"", "\"Hi! Is everything okay? We missed you at the start of the meeting. We can catch you up.\""],
                    ["\"We have to do it my way.\"", "\"I've had success with [My Method]. You've had success with [Your Method]. How can we combine the best of both for the students?\""]
                  ]
                }
              }
            }
          ]
        },
        {
          moduleId: "c7_m3",
          moduleTitle: "Module 3 (Interactive Simulation): Scenario Simulator",
          steps: [
            {
              stepId: "c7_m3_s1",
              stepTitle: "Practice Quiz",
              type: "quiz",
              content: {
                title: "Module 3 (Interactive Simulation): Scenario Simulator",
                customPromptHtml: "<p>Let's practice. Read the scenario and choose the best response from your new Phrase Bank.</p><div class='p-3 bg-gray-700 border-l-4 border-cyan-500 my-4 text-sm text-gray-200'><b>Scenario:</b> An NNU student's written work is very good, but their English is poor. You need to give them feedback that encourages their good ideas but addresses the language issue.</div>"
              },
              quiz: {
                question: "Which is the best response?",
                options: [
                  { text: "(A) This is good, but your English needs work.", isCorrect: false },
                  { text: "(B) Your ideas here are excellent. To make them even more powerful, let's work on...", isCorrect: true },
                  { text: "(C) Good job.", isCorrect: false }
                ],
                feedback: {
                  correct: "You chose (B). This is the best choice! It validates the student's ideas first before gently offering language support. This builds their confidence and yours.",
                  incorrect: "Not quite. The best choice is (B), as it validates the student's ideas before gently offering language support."
                }
              }
            }
          ]
        },
        {
          moduleId: "c7_m4",
          moduleTitle: "Module 4: The High-Stakes Scenario Lab",
          steps: [
            {
              stepId: "c7_m4_s1",
              stepTitle: "Matching Lab",
              type: "matchingQuiz",
              matchingQuiz: {
                title: "Module 4: The High-Stakes Scenario Lab",
                instructionsHtml: "<p>This is a lab to test your new skills. Below are 3 high-stakes scenarios, just like the ones we practiced for. There is also a list of 5 possible feedback phrases. Your job is to match the best and most appropriate feedback phrase to each scenario. This will test your understanding of the Phrase Bank, cultural sensitivity, and the “Ladder of Inference”.</p><p><b>Instructions:</b> Match the best feedback phrase from the \"Feedback Bank\" (A-E) to each \"Scenario\" (1-3). Two of the feedback phrases are distractors and should not be used.</p>",
                scenarios: [
                  { id: "s1", text: "1. Professor <-> NNU Student: You are giving feedback to an NNU student. Their project had excellent, deep analysis, but their English grammar was poor." },
                  { id: "s2", text: "2. NNU Professor <-> International Partner: You are in a meeting with your partner from the US. They gave the NNU student's project (from Scenario 1) a very low grade, stating, \"The writing was just not professional.\" You need to start a negotiation." },
                  { id: "s3", text: "3. Professor <-> International Student: In a public chat, an international student wrote to an NNU student, \"I can't understand you. Can you type in proper English?\" You are now in a private meeting with that international student." }
                ],
                feedbackBank: [
                  { id: "A", text: "\"Your ideas here are excellent. To make them even more powerful for an international audience, let's focus on...\"" },
                  { id: "B", text: "\"Your grading is wrong. You are only looking at the grammar, not the ideas. That's not fair.\"" },
                  { id: "C", text: "\"I'd love to quickly sync up on our grading. I saw this project a bit differently, and I'd love to learn your perspective.\"" },
                  { id: "D", text: "\"You must apologize to the NNU student. What you said was rude and unacceptable.\"" },
                  { id: "E", text: "\"I noticed your comment in the chat yesterday. It might have been interpreted differently than you intended. Can we talk about that?\"" }
                ],
                correctMatches: { s1: "A", s2: "C", s3: "E" },
                rationaleHtml: `
                  <p>Thank you for completing the lab. Here are the results and the rationale.</p>
                  <ul class="space-y-4 list-disc list-inside mt-4">
                    <li>
                      <b>Scenario 1 -> Correct Match is (A): "Your ideas here are excellent..."</b>
                      <p class="pl-6 text-gray-300">Rationale: This is the perfect use of the "Category 1" phrase. It directly addresses the 42% anxiety about student language skills by validating their ideas first (building confidence) before gently offering support for the language.</p>
                    </li>
                    <li>
                      <b>Scenario 2 -> Correct Match is (C): "I'd love to quickly sync up..."</b>
                      <p class="pl-6 text-gray-300">Rationale: This is a "Category 3" phrase. It avoids accusation (like option B, which fails the 'Ladder of Inference'). It uses collaborative, inquiry-based language ("learn your perspective") to open a negotiation, not start a fight.</p>
                      <p class="pl-6 text-gray-300"><b>(B) was incorrect</b> because it is an accusation. It will make the partner defensive and shut down the conversation.</p>
                    </li>
                    <li>
                      <b>Scenario 3 -> Correct Match is (E): "I noticed your comment..."</b>
                      <p class="pl-6 text-gray-300">Rationale: This is a "Category 2" phrase. It is the best way to handle a cultural mistake. It is private, it describes the observation ("I noticed your comment...") rather than an accusation ("You were rude..."), and it invites a discussion ("Can we talk?").</p>
                      <p class="pl-6 text-gray-300"><b>(D) was incorrect</b> because it is a direct command from a "High Power Distance" perspective ("You must apologize"). This may cause the student (who may be from a "Low Power Distance" culture) to become defensive. It's better to explain the impact and let the student choose to apologize.</p>
                    </li>
                  </ul>`
              }
            }
          ]
        }
      ]
    }
  ]
};
