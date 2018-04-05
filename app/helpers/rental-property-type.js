import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
 'Condo',
 'Townhouse',
 'Apartment',
];

export function rentalPropertyType([propertyType]) {
  if(communityPropertyTypes.includes(propertyType)){
    return 'Community';
  }

  return 'StandAlone';
}

export default helper(rentalPropertyType);
