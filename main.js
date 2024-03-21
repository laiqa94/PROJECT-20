"use strict";
let Guest_list = ['kamran tassori', 'Daniyal nagori', 'Zia khan'];
// for(let i=0; i<Guest_list.length; i++){
//    console.log('Dear mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party'.\n\nThank you!\n\n)
//}
let absant_Guest = 'Daniyal nagori';
let new_Guest = 'Ameen alam';
Guest_list[0] = new_Guest;
//for(let i=0; i<Guest_list.length; i++){
//    console.log('Dear mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party'.\n\nThank you!\n\n)
//}
//console.log(`Mr. ${absant_Guest} is not coming to the party.`);
//console.log('Good New! We find Big Table so we are inviting 3 more guest.')
Guest_list.unshift('hamza syed');
Guest_list.splice(2, 0, 'Qasim');
Guest_list.push('Hira khan');
//for(let i=0; i<Guest_list.length; i++){
//   console.log('Dear Mr.' + Guest_list[1] +',/n/nIt is our pleasure o invite you in our party.\n\nThank you!\n\n)
//}
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    //console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
//for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr.' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
//}
Guest_list.splice(0, 2);
console.log(Guest_list);
console.log(`Total number of Guest Are: ${Guest_list.length}`);
