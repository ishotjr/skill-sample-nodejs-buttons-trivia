'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'In Pokémon Yellow, what does Pikachu do throughout the entire game?',
            answers: ['Paints your toenails', 'Zaps things with electricity', 'Tags along with you', 'Keeps trading you for other Trainers'],
            correct_answer: 'Tags along with you'
        },
        {
            index: 2,
            question: 'Where’s the best place to encounter wild Pokémon?',
            answers: ['In tall grass', 'At the Pokémon League', 'Inside a Gym', 'In the zoo'],
            correct_answer: 'In tall grass'
        },
        {
            index: 3,
            question: 'What can you do to make Pikachu really, really happy in Pokémon Red, Pokémon Blue, and Pokémon Yellow?',
            answers: ['Feed it!', 'Talk to it!', 'Use it to win in battle!', 'Give it a toy!'],
            correct_answer: 'Use it to win in battle!'
        },
        {
            index: 4,
            question: 'What’s the name of the building where you take your Pokémon to get healed?',
            answers: ['Pokémon Disco', 'Pokémon Emergency Clinic', 'Pokémon Hot Springs', 'Pokémon Center'],
            correct_answer: 'Pokémon Center'
        },
        {
            index: 5,
            question: 'What makes Lt. Surge such a tough opponent?',
            answers: ['He has awesome hair', 'He’s a Pokémon Gym Leader', 'He has a great sense of style', 'He has a photographic memory'],
            correct_answer: 'He’s a Pokémon Gym Leader'
        },
        {
            index: 6,
            question: 'How can a Pokémon evolve?',
            answers: ['Level it up', 'Trade it with a friend', 'Give it a specific item', 'All of the above'],
            correct_answer: 'All of the above'
        }
    ],
    questions_en_GB: [
        {
            index: 1,
            question: 'In Pokémon Yellow, what does Pikachu do throughout the entire game?',
            answers: ['Paints your toenails', 'Zaps things with electricity', 'Tags along with you', 'Keeps trading you for other Trainers'],
            correct_answer: 'Tags along with you'
        },
        {
            index: 2,
            question: 'Where’s the best place to encounter wild Pokémon?',
            answers: ['In tall grass', 'At the Pokémon League', 'Inside a Gym', 'In the zoo'],
            correct_answer: 'In tall grass'
        },
        {
            index: 3,
            question: 'What can you do to make Pikachu really, really happy in Pokémon Red, Pokémon Blue, and Pokémon Yellow?',
            answers: ['Feed it!', 'Talk to it!', 'Use it to win in battle!', 'Give it a toy!'],
            correct_answer: 'Use it to win in battle!'
        },
        {
            index: 4,
            question: 'What’s the name of the building where you take your Pokémon to get healed?',
            answers: ['Pokémon Disco', 'Pokémon Emergency Clinic', 'Pokémon Hot Springs', 'Pokémon Center'],
            correct_answer: 'Pokémon Center'
        },
        {
            index: 5,
            question: 'What makes Lt. Surge such a tough opponent?',
            answers: ['He has awesome hair', 'He’s a Pokémon Gym Leader', 'He has a great sense of style', 'He has a photographic memory'],
            correct_answer: 'He’s a Pokémon Gym Leader'
        },
        {
            index: 6,
            question: 'How can a Pokémon evolve?',
            answers: ['Level it up', 'Trade it with a friend', 'Give it a specific item', 'All of the above'],
            correct_answer: 'All of the above'
        }
    ],
    questions_de_DE: [
        {
            index: 1,
            question: 'Was macht Pikachu in Pokémon Yellow während des gesamten Spiels?',
            answers: ['Malt deine Fußnägel', 'Zappt Dinge mit Strom', 'Tags zusammen mit dir', 'Hält dich für andere Trainer ein'],
            correct_answer: 'Tags zusammen mit dir'
        },
        {
            index: 2,
            question: 'Wo ist der beste Ort, um wilde Pokémon zu treffen?',
            answers: ['In hohem Gras', 'In der Pokémon Liga', 'In einem Fitnessstudio', 'Im Zoo'],
            correct_answer: 'In hohem Gras'
        },
        {
            index: 3,
            question: 'Was können Sie tun, um Pikachu in Pokémon Red, Pokémon Blue und Pokémon Yellow wirklich, wirklich glücklich zu machen?',
            answers: ['Füttere es!', 'Sprich damit!', 'Verwenden Sie es, um im Kampf zu gewinnen!', 'Gib ihm ein Spielzeug!'],
            correct_answer: 'Verwenden Sie es, um im Kampf zu gewinnen!'
        },
        {
            index: 4,
            question: 'Wie heißt das Gebäude, in das Sie Ihr Pokémon bringen, um geheilt zu werden?',
            answers: ['Disco-Pokémon', 'Pokémon-Notfallklinik', 'Heiße Quellen von Pokémon', 'Pokémon Center'],
            correct_answer: 'Pokémon Center'
        },
        {
            index: 5,
            question: 'Was macht Lt. Surge zu einem harten Gegner?',
            answers: ['Er hat tolle Haare', 'Er ist ein Pokémon-Übungsleiter', 'Er hat einen großartigen Sinn für Stil', 'Er hat ein fotografisches Gedächtnis'],
            correct_answer: 'Er ist ein Pokémon-Übungsleiter'
        },
        {
            index: 6,
            question: 'Wie kann sich ein Pokémon entwickeln?',
            answers: ['Nivelliere es', 'Tausche es mit einem Freund', 'Vergeben Sie einen bestimmten Artikel', 'Alles das oben Genannte'],
            correct_answer: 'Alles das oben Genannte'
        }
    ]
});
