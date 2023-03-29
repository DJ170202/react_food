import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Shahi Paneer',
    description: 'Finest cottage cheese and veggies',
    price: 220.00,
  },
  {
    id: 'm2',
    name: 'Fried Rice',
    description: 'Spicy and sour-flavoured rice',
    price: 165.00,
  },
  {
    id: 'm3',
    name: 'Manchurian',
    description: 'Spicy and Tangy Gravy',
    price: 169.00,
  },
  {
    id: 'm4',
    name: 'Salad',
    description: 'Healthy and delicious',
    price: 100.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;