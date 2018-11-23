
import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'departmentServicFilter'
})
@Injectable()
export class DepartmentService implements PipeTransform {
    transform(items: any, searchText: string, defaultFilter: boolean): any {
        let data = [];
        let flag: boolean = false;
        if (!searchText) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }

        searchText = searchText.toLowerCase();
        for (let dept of items) {
            flag = false;
            if (this.isValid(dept.department, searchText)) {
                data.push(dept);
                flag = true;
            }
            if (!flag) {
                for (let service of dept.services) {
                    if (this.isValid(service.name, searchText)) {
                        data.push(dept);
                        break;
                    }
                }
            }

        }
        return data;
    }
    isValid(data: string, searchText: string) {
        return data.toLowerCase().includes(searchText);
    }
}
