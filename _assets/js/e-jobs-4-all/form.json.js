const EJobs_Form_Json = [
    [
        {
            name: 'intro',
            label: `
            <p>Thank you for your interest in the Entrepreneurship Jobs for All (E-Jobs4All) program! The Entrepreneurship Jobs for All (E-Jobs4All) program gives you the confidence, resources, knowledge, network, mentorship and financial support to build a business with an impact.  For Ghanaian SME’s, students, unemployed and recent graduates with a desire to solve pressing problems and bring entrepreneurial ideas to life or scale up their businesses, this program is for you. The program is split into three online courses where you will learn entrepreneurship, receive virtual coaching, develop your own business idea, and demonstrate your commitment in order to advance to the next course.</p>
            <h6 class="mt-3"><i>Program Dates:</i></h6>
            <div><b>Applications are due November 30, 2023, 11:59PM GMT.</b></div>

            <div><b>Course 1 - Explore Entrepreneurship</b> January 2023 - March 2024</div>
            <div><b>Course 2 - Ignite Entrepreneurship</b> April 2023 - June 2024</div>
            <div><b>Course 3 - Launch Entrepreneurship</b> July 2023 - September 2024</div>
            <p>&nbsp;</p>

            <div>${__['programmes'][0][2].replace('<a href=\"./e-jobs-4-all\" class=\"btn btn-sm btn-dark\">Apply Now</a>', '')}</div>
            `,
            type: 'break',
            col: 12,
        },
    ],

    [
        {
            name: 'token',
            label: 'Payment Token',
            type: 'input',
            col: 12,
            options: {
                type: 'text'
            },
            required: true,
            help: `To obtain a valid token, please go to <a href="./e-jobs-4-all-payment" target="_blank">[Payment Page]</a>. After making payment, you will receive an SMS with a payment token to proceed with your application.`,
        },
    ],

    [
        {
            name: 'first_name',
            label: 'First Name',
            type: 'input',
            col: 4,
            options: {
                type: 'text'
            },
            required: true,
        },
        {
            name: 'middle_name',
            label: 'Middle Name',
            type: 'input',
            col: 4,
            options: {
                type: 'text'
            },
        },
        {
            name: 'last_name',
            label: 'Last Name',
            type: 'input',
            col: 4,
            options: {
                type: 'text'
            },
            required: true,
        },
        {
            name: 'email',
            label: 'Preferred contact email of applicant',
            type: 'input',
            options: {
                type: 'email'
            },
            required: true,
        },
        {
            name: 'phone',
            label: 'Preferred contact number of applicant',
            type: 'input',
            options: {
                type: 'number'
            },
            required: true,
        },
        {
            name: 'gender',
            label: 'Please select the gender that you identify with',
            type: 'select',
            options: {
                items: ['Female', 'Male', 'Other', 'Prefer not to answer'],
            },
            required: true,
        },
        {
            name: 'social',
            label: 'Please provide any of your social media handle (If any)',
            type: 'input',
            options: {
                type: 'text'
            },
            required: true,
        },
        {
            name: 'region',
            label: 'Region',
            type: 'input',
            required: true,
        },
        {
            name: 'district',
            label: 'District',
            type: 'input',
            required: true,
        },
        {
            name: 'city',
            label: 'City',
            type: 'input',
            required: true,
        },
        {
            name: 'education_level',
            label: 'Level of education/study',
            type: 'select',
            options: {
                items: ['Senior High School', 'Diploma', 'Degree', 'Masters', 'PhD',]
            },
            required: true,
        },
        {
            name: 'graduation_year',
            label: 'Year of graduation',
            type: 'input',
            options: {
                type: 'number'
            },
            required: true,
        },
        {
            name: 'study_program',
            label: 'Program of study',
            type: 'input',
            options: {
                type: 'text'
            },
            required: true,
        },
        {
            name: 'degree_level',
            label: 'Please select which best describes your degree',
            type: 'select',
            options: {
                items: ['Major', 'Minor', 'Other'],
            },
            required: true,
        },
        {
            name: 'university_website',
            label: 'University\'s Website (if applicable) ',
            type: 'input',
            options: {
                type: 'url',
            },
            required: true,
        },
    ],

    [
        {
            name: 'university_name',
            label: 'Name of academic institution at which you are enrolled or studied',
            type: 'select',
            options: {
                items: ['University of Ghana', 'JACCD Design Institute Africa', 'Kwame Nkrumah University of Science and Technology', 'Data Link University College', 'Other'],
            },
        },
        {
            name: 'university_address',
            label: 'Location of Academic Institution',
            type: 'input',
            options: {
                type: 'text'
            },
        },
    ],

    [
        {
            name: 'idea_stage',
            label: 'To date, how far along are you in the process of transforming your idea into a working solution? Choose one option below that best applies to you.',
            type: 'select',
            col: 12,
            options: {
                items: ['I just started thinking about entrepreneurship recently and therefore I have no idea yet', 'Idea stage', 'Solution development stage', 'Pilot stage', 'Commercialization stage', 'Profitable new venture looking to scale'],
            },
        },
        {
            name: 'idea_about',
            label: 'What is the main idea you would like to develop into a business opportunity under this program? (50 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text',
            },
        },
        {
            name: 'idea_industry',
            label: 'In which industry would you categorize your business idea? Check all that apply',
            type: 'checkbox',
            col: 12,
            options: {
                items: ['Agriculture and agribusiness', 'Banking', 'Biotechnology', 'Clean Technology', 'Construction', 'Consumer Goods', 'Femtech', 'Fintech', 'Healthcare', 'Hydropower', 'Life Sciences', 'Manufacturing', 'Media and Entertainment', 'Mining', 'Pharmaceuticals', 'Steel', 'Textile and Fashion', 'Timber', 'Tourism'],
            },
        },
        {
            name: 'idea_problem',
            label: 'What problem does this idea solve?',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_solution',
            label: 'Which solution do you think will help you solve the problem? (50 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_validation',
            label: 'Have you spoken with any potential customers/users to validate that your intended solution is desirable?',
            type: 'select',
            col: 12,
            options: {
                items: ['Yes', 'No'],
            },
        },
        {
            name: 'idea_organisation',
            label: 'Have you thought about if the best way to solve this problem is through a for-profit company or through a not-for-profit organization? Please select the type of organization you anticipate using to help you achieve your mission. ',
            type: 'select',
            col: 12,
            options: {
                items: ['For-Profit', 'Not-For-Profit', 'Not Sure'],
            },
        },
        {
            name: 'idea_organisation_explained',
            label: 'Please explain why you selected your answer above.',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_cost',
            label: 'How much will it cost to set or scale up this venture?',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_partners',
            label: 'Are there any potential stakeholders or partners you see helping you to make this venture a successful venture? Please explain. (50 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_teamwork',
            label: 'Are you ready and willing to work on your idea in a team?',
            type: 'select',
            options: {
                items: ['Yes', 'Maybe', 'No'],
            },
        },
        {
            name: 'idea_challenges',
            label: 'What top three challenges do you think you will have as you try to develop this venture? (50 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_opportunities',
            label: 'What top three opportunities do you think you will come across as you try to develop this new venture? (50 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_skills',
            label: 'Please briefly explain the passions, strengths and skills you will bring to the program and why you wish to participate. (200 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_website',
            label: 'Please provide your business website if you have any',
            type: 'input',
            col: 12,
            options: {
                type: 'url'
            },
        },
        {
            name: 'idea_more_info',
            label: 'Any other information that you would like to share with us about your idea, concept, product or service?',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_time',
            label: 'Should you be successful throughout the phases of this program, you are likely to spend the next 12 months involved in this project, which will require a minimum of 2 hours almost on daily basis. Taking this into account given your current responsibilities, do you believe you will be able to dedicate this time to working on your idea and building your venture?',
            type: 'select',
            col: 12,
            options: {
                items: ['Yes', 'Maybe', 'No'],
            },
        },
        {
            name: 'english_level',
            label: 'What is your level of English proficiency?',
            type: 'select',
            options: {
                items: ['Beginner', 'Intermediate', 'Advance'],
            },
        },
    ],

    [
        {
            name: 'extra_details_p',
            label: 'Thank you for filling out your application for the Entrepreneurship Jobs for All (E-Jobs4All) Fellowship program.',
            type: 'break',
            col: 12,
        },
        {
            name: 'extra_details',
            label: 'Any other details you would like to share?',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text',
            },
        },
        // { name: 'first_name', label: 'First', type: 'textarea', options: { type: 'text' }, },
        // { name: 'first_name', label: 'First', type: 'textarea', options: { type: 'text' }, },
    ]
];

const EJobs_Form_JsonPay = [
    {
        name: 'network',
        label: 'Choose network',
        type: 'select',
        options: {
            items: ['MTN', 'VOD', 'ATM'],
            items: [
                { value: 'MTN', label: 'MTN Mobile Money' },
                { value: 'VOD', label: 'Vodafone Cash' },
                { value: 'ATM', label: 'AT Money' },
            ],
        },
        required: true,
    },
    {
        name: 'accountName',
        label: 'Your full name',
        type: 'input',
        options: {
            type: 'text'
        },
        required: true,
    },
    {
        name: 'accountNumber',
        label: 'Phone number',
        type: 'input',
        options: {
            type: 'number'
        },
        required: true,
    },
];