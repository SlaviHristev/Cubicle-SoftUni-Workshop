function getDificultyOptions(difficultyLevel){
    const titles = [
        'Very Easy',
        'Easy',
        'Medium',
        'Intermediate',
        'Expert',
        'Hardcore',
    ];

    const options = titles.map((title,index) => ({
        title: `${index + 1} - ${title}`,
        value: index + 1,
        selected: Number(difficultyLevel) === index + 1,
    }))
    return options;
}

module.exports = getDificultyOptions;