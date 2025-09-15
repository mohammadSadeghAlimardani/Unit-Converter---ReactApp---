const Converted = (props) => {
    const { convertedAmount, amount, fromUnit, toUnit } = props;

    return (
        <div className="converted">
            {convertedAmount ? (
                <p>
                    {amount} {fromUnit} is{" "}
                    {convertedAmount < 1
                        ? Number(convertedAmount).toFixed(10)
                        : Math.round(convertedAmount)}{" "}
                    {toUnit}
                </p>
            ) : (
                ""
            )}
        </div>
    );
};

export default Converted;
