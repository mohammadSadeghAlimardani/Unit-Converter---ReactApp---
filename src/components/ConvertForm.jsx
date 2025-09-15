import { FaArrowRightLong } from "react-icons/fa6";
import { nanoid } from "nanoid";

const ConvertForm = (props) => {
    const {
        handleConvert,
        setAmount,
        setToUnit,
        setFromUnit,
        fromUnit,
        toUnit,
        unitsArray,
        amount,
    } = props;

    return (
        <form className="convert-form" onSubmit={handleConvert}>
            <header>
                <select
                    name="from"
                    value={fromUnit}
                    onChange={(event) => setFromUnit(event.target.value)}
                >
                    <option value="" disabled selected hidden>
                        from
                    </option>
                    {unitsArray.map((unit) => {
                        return (
                            <option key={nanoid()} value={unit}>
                                {unit}
                            </option>
                        );
                    })}
                </select>
                <FaArrowRightLong style={{ fontSize: "2rem" }} />
                <select
                    name="to"
                    value={toUnit}
                    onChange={(event) => setToUnit(event.target.value)}
                >
                    <option value="" disabled selected hidden>
                        to
                    </option>
                    {unitsArray.map((unit) => {
                        return (
                            <option key={nanoid()} value={unit}>
                                {unit}
                            </option>
                        );
                    })}
                </select>
            </header>
            <section>
                <label htmlFor="amount">amount</label>
                <input
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    id="amount"
                    type="text"
                    name="amount"
                />
            </section>
            <button className="btn" type="submit">
                convert
            </button>
        </form>
    );
};

export default ConvertForm;
