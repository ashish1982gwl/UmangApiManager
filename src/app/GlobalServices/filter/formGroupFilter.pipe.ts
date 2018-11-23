
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'customApiManagerFormGroupFilter'
})
@Injectable()
export class CustomApiManagerFormGroupFilter implements PipeTransform {
    transform(items: any, filter: any, defaultFilter: boolean): any {
      let finalJson=[];
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        for (let itemkey in items) {
            for (let filterKey in filter) {
                 if (!filter[filterKey]) {
                   return items;
                }
                console.log('items[itemkey: ' + items[itemkey] + '  search: ' + filter[filterKey]);
               if(this.isValid(items[itemkey].get(filterKey).value,filter[filterKey])){
                finalJson.push(items[itemkey]);
                break;
              }
            }
        }
        
        return finalJson;
    }
    isValid(data: string, searchText: string) {
        return data.toLowerCase().includes(searchText);
    }
}