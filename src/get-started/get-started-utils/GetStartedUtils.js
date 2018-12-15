export default class Utils{
    displayGoalDefaultOrNot(optionVal){
        //This makes sure that the user doesn't ignore the goals option
        if(optionVal === 'instruction'){
            return 'block';
        }
        return 'none';
    }

    kebabCaseToWords(words){
        return words.split('-')
            .map((word) => word[0].toUpperCase() +word.substring(1))
            .join(' ');
    }
}