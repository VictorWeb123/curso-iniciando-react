import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca= 'VolksWagen' ano_lancamento={1998} />
               <Item marca = 'Porsche' ano_lancamento={2010} />
               <Item marca = 'Ferrari' ano_lancamento={1998} />
               <Item marca= 'Land Rover ' ano_lancamento={1987}/>
            </ul>
        </>
    );
};

export default List;