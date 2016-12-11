import { Pipe, PipeTransform } from '@angular/core';
import { IBucketList } from './bucketlist';

@Pipe({
  name: 'bucketlistFilter'
})
export class BucketlistFilterPipe implements PipeTransform {

  transform(value: IBucketList[], filterBy: string): IBucketList[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((bucketlist: IBucketList) =>
      bucketlist.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
