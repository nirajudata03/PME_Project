const FeatureCard = ({
    title,
    description,
    points,
    image,
    reverse = false,
}) => {
    return (
        <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Text Section */}
            <div className={reverse ? "md:order-2" : ""}>
                <h3 className="text-2xl font-semibold mb-4">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6">
                    {description}
                </p>

                <ul className="space-y-3">
                    {points.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700"
                        >
                            <span className="text-green-600 mt-1">✔</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image Section */}
            <div className={reverse ? "md:order-1" : ""}>
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl shadow-lg w-full object-cover"
                />
            </div>
        </div>
    );
};

export default FeatureCard;
