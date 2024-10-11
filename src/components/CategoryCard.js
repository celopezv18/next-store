import Link from 'next/link';

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img src={category.image?.src} alt={category.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
          <p className="text-gray-600 mb-4">{category.count} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
