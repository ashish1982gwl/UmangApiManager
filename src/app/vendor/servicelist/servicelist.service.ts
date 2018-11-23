import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../../lib';
@Injectable({
    providedIn: 'root'
})
export class ServicelistService {
    getBooks(): TreeviewItem[] {
        /*const childrenCategory = new TreeviewItem({
            text: 'Children', value: 1, collapsed: true, children: [
                { text: 'Baby 3-5', value: 11 },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ]
        });*/
        const itCategory = new TreeviewItem({
            text: 'Umang Departments', value: 9, children: [
                {
                    text: 'CBSC', value: 91, children: [
                        { text: 'School Locator', value: 951 },
                        { text: '10th and 12th', value: 916 },
                        { text: 'Exam center locator', value: 981 },
                        { text: 'Result', value: 919 },
                        { text: 'Jee', value: 11 },

                        /*{
                            text: 'Backend', value: 912, children: [
                                { text: 'C#', value: 9121 },
                                { text: 'Java', value: 9122 },
                                { text: 'Python', value: 9123, checked: false, disabled: true }
                            ]
                        }*/
                    ]
                },
                {
                    text: 'ORS', value: 92, children: [
                        { text: 'Blood Availability', value: 921 },
                        { text: 'My Appointment', value: 922 },
                        { text: 'Book Appointment', value: 923 },
                        { text: 'My Lab Report', value: 924 },
                    ]
                }
            ]
        });
        /* const teenCategory = new TreeviewItem({
             text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
                 { text: 'Adventure', value: 21 },
                 { text: 'Science', value: 22 }
             ]
         });
         const othersCategory = new TreeviewItem({ text: 'Others', value: 3, checked: false, disabled: true });
         */
        // return [childrenCategory, itCategory, teenCategory, othersCategory];
        return [itCategory];

    }
}