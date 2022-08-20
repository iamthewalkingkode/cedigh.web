const EJobs_Form_Json = [
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
        // {
        //     name: 'university_website',
        //     label: 'University\'s Website (if applicable) ',
        //     type: 'input',
        //     options: {
        //         type: 'url',
        //     },
        //     required: true,
        // },
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
            options: {
                items: ['I just started thinking about entrepreneurship recently and therefore I have no idea yet', 'Idea stage', 'Solution development stage', 'Pilot stage', 'Commercialization stage', 'Profitable new venture looking to scale'],
            },
        },
        {
            name: 'idea_about',
            label: 'What is the main idea you would like to develop into a business opportunity under this program? (50 words maximum)',
            type: 'input',
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
            label: 'Have you spoken with any potential customers/users to validate that your intended solution is desirable? If so, please explain. (50 words maximum)',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
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
            label: 'Please explain why you selected your answer above. ',
            type: 'textarea',
            col: 12,
            options: {
                type: 'text'
            },
        },
        {
            name: 'idea_cost',
            label: 'Have you thought about how much it will cost you to set up this venture? Please explain. (50 words maximum)',
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