import { Item } from './item';

export class IBucketList {
    id: number;
    name: string;
    description: string;
    items: Item[];
    created_on: string;
    modified_on: string;
    url: string;
    owner: string;
}