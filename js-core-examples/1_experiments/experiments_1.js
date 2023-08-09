//
// const fetchActivity = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://www.boredapi.com/api/activity')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch activity');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data.activity);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// };
//
//
// fetchActivity()
//     .then(activity => {
//         console.log('Fetched activity:', activity);
//     })
//     .catch(error => {
//         console.error('Failed to fetch activity:', error);
//     });



const fetchActivity = async () => {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity');
        if (!response.ok) {
            throw new Error('Failed to fetch activity');
        }
        const data = await response.json();
        return data.activity;
    } catch (error) {
        throw error;
    }
};

(async () => {
    try {
        const activity = await fetchActivity();
        console.log('Fetched activity:', activity);
    } catch (error) {
        console.error('Failed to fetch activity:', error);
    }
})();





