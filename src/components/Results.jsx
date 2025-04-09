import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);

  if (!resultData || resultData.length === 0) {
    return <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>;
  }

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((data) => {
            const totalInvestedCapital =
              initialInvestment + data.annualInvestment * data.year;
            const totalInterest = data.valueEndOfYear - totalInvestedCapital;

            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
