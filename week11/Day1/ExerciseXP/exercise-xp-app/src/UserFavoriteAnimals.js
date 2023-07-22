const UserFavoriteAnimals = (props) => {
    const {animals} = props;
    return  (
        <>
            <ul>
                {animals.map((animal, index) => {
                    return <li key={index}>{animal}</li>
                })}
            </ul>
        </>
    );
};

export default UserFavoriteAnimals;