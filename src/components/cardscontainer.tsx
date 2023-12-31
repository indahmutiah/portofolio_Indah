import { Center, SimpleGrid } from '@chakra-ui/react';
import Card from '@/components/cards';


interface CardData {
    id: string;
    title: string;
    description: string;
    image: string; // Image URL (JPG or PNG)
}

interface CardsContainerProps {
    cards: CardData[];
}

const CardsContainer: React.FC<CardsContainerProps> = ({ cards }) => {
    
    return (

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4} >
            {cards.map(card => (
            <Card
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description} 
                image={card.image}
            />
            ))}
        </SimpleGrid>
    );
};

export default CardsContainer;
