conversion_rates = {
    "CAD": 1,
    "AUD": 0.9228,
    "BRL": 0.3371,
    "CNY": 0.1922,
    "EUR": 1.4856,
    "HKD": 0.1693,
    "INR": 0.01885,
    "IDR": 0.000094,
    "JPY": 0.01217,
    "MYR": 0.3203,
    "MXN": 0.06894,
    "NZD": 0.8747,
    "NOK": 0.1509,
    "PEN": 0.3977,
    "RUB": 0.02051,
    "SAR": 0.3538,
    "SGD": 0.9728,
    "ZAR": 0.09194,
    "KRW": 0.001139,
    "SEK": 0.1404,
    "CHF": 1.3352,
    "TWD": 0.04294,
    "THB": 0.04274,
    "TRY": 0.2340,
    "GBP": 1.6945,
    "USD": 1.3269,
    "VND": 0.000057
    }

def convert_value_to_curr(value, from_curr, to_curr): 
    """
    Convert value from the current currency from_curr to new currency to_curr by
    first converting value to CAD then to to_curr.
    Based on average annual conversion rates to CAD posted by the bank of Canada

    modified from downloaded json from 
        https://www.bankofcanada.ca/rates/exchange/annual-average-exchange-rates/
    Json with rates: frontend/src/components/Results/FX_RATES_ANNUAL-sd-2017-01-01.json
    Only kept rates for end of 2019
    """
    if from_curr not in conversion_rates.keys() or to_curr not in conversion_rates.keys():
        return value

    to_CAD_rate = conversion_rates[from_curr]
    conv = value * to_CAD_rate / conversion_rates[to_curr]
    return conv