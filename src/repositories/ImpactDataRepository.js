export default class ImpactDataRepository {

    getImpactDataStatistics(){
        const impactData = [
            {
                id: 1,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKeXcnWTnTW4EKR7rPfbrRsMVsHueCsjsfzQ&usqp=CAU",
                mediaTitle: "media1",
                contentTitle: "content 1",
                content: "ajkakakkakakk jj lsm akak hjotgugygftyjunnkoioio sdsreretrytuyiiikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            },
            {
                id: 2,
                image: "https://source.unsplash.com/random",
                mediaTitle: "media2",
                contentTitle: "content 2",
                content: "jkjwwjow eojeek enknknoiww www uuuuuuuuuuuuuuuuuudddddddddddddd ttttttttttttttttttb iiiiiiiiiiiiiiiiiiii"
            },
            {
                id: 3,
                image: "https://source.unsplash.com/random",
                mediaTitle: "media 3",
                contentTitle: "content 3",
                content: "ajkakakkakakk jj lsm akak"
            },
            {
                id: 4,
                image: "https://source.unsplash.com/random",
                mediaTitle: "media 4",
                contentTitle: "content 4",
                content: "jkjwwjow eojeek enknknoiww www"
            }
        ];
        return impactData;
    }

    getImpactSummary(){
        const summary ={
            title:"Touching Lives!!",
            content:"Food for thought saved 1600 kgs of food, by donating the food form over 30 weddings to poor people from slums. We have fed over 600 people till date. Still aspiring to touch more lives!!",
            hashTags:"#ReduceFoodWastage #EliminateHunger #SpreadingJoy"
        }
        return summary;
    }

    
}
