// HomePage.js

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <div className="image-container">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBMTEhASFhUXGBUSExUQFhcTExoSFxYWFhUTFhcYHSkgGBslHRUXIT0hJissLjouFyAzODMtNyguLisBCgoKDg0OGxAQGy8lICYtLS0tLS8tLS0tKystKy0tLS0tLS8tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKsBJgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHCAL/xAA9EAACAgECAggDBQcCBwEAAAABAgADEQQhEjEFBhMiQVFhcQeBkRQyUqGxI0JicoKSwbLRMzVDY3PS8CT/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAgQBAwUGB//EAC0RAAIBAgQDBwUBAQAAAAAAAAABAgMRBBIhMUFRYRNxgZGhsfAFIjLB4RTR/9oADAMBAAIRAxEAPwCBxETkn0IREQBERAEREAREQBERAEREAREQBERAEREAREQBERAKzadUv+YaX/zV/wCuaubPqs2NfpD/AN+sfWwD/MytyFX8JdzO3SkoZZ1mpSlC9hwoxyGSSTgKoG7MTsAN5cPOF6V4T5TXWaHX3cHcapXb7iMqWLXtxNfcQ3AcHZKwT/EN8QPrN0xSK+yqpZdRx2Jc7W22kdnZhOzLNg8QG5wMcsSMnlV2Sox7WeSGvO1nbq9eensdNic26mdMZ4aX1GqS5rFFbKe2qIbhASyt8nGcnK4OPESfLdalgo1CBLDns3TJptA3PZk7q2Nyh354yN4jLMrkq1N0p5Jb+65rp8ZlRETJAREQBERAPP8AERKZ6UREQBERAEREAREQBERAEREAREQBERAEREAREQBERAKzM6Dfh1NDeVtbfSxTMOEcqQw5ghh8jn/EcSM45otc0egW5yP39O6ai8X6gllrc1aetRnNoIXUak+iZ4B6h/E7byu4FQ43BAcexGZyzozXtrEbRv2Raxs6ayxRxJYz8T1q4UsofPPzHrLUpZWcClR7RNv8Va9t7Pd7Pbj0uZ3W/r5qtRbbVVaEo4mRezxl0U44i/PDYztjYiQtmk46X+GGupHFUUuAGSKyUf1wrbH5GQaV6me/3nZwX+fs7YdppWvbnzfHzOi/Cbo7Vdo9qV1rURg23V8b5GxWlgQR6+G3IyX9J9UdS9Aqr6QtcZUj7YqWlSu6vW6qGVwd8knlMP4Q6+k6LshYO1V3Z0J72GwVKjxGPLxzJ2lyk4DKTvyIPLYy7SguzR5jH4ipHFzaVrPly2+bEM6M1DuhFgAtrZqbgNh2ic2A8mBVh6MJmSzq1Ca/UqBs9envOPxHtaiffFS/QS9Is3wkpRTXz4xERMExERAPP8REpnpRERAEREAREQBERAEREAREQBERAEREAREQBERAEREASgMrEGTs/UvVi7Qac/hXsm96+5+gH1nP+g9QvR/SqNcO7VY6vtnCEMocAejBpt/hZ0jg3ac+P7ZPcYRx9OE/IzK+IXV5rP8A9NS5KjFyjmVHKweeBsfTHlNzu4qS3RyKajTrToz/ABldee3u14nXdJqUtRbK2DIwDKy8ip3BE5R8W+jdFplq7KhUusNljMmw4Bji4h4ks4x7Gb/4W69K+imey3CVPYWLHZEAU4Hpvn5zlXWPpy7XXtbZnmVRTyVMkqg/385trVE6a5so/TcHOGMkk3lg2nvrvZdebNajYIIJBHIjYj2Mn3wbuI1lq8LNxVnL8+HDKdz65+oE5/J38M+lraBqa6grWWdmKgeasOINa/8AAoOT5nAG5lejpUTOz9STlhZxS3svVe25OWtFus1Vg5Ka9KD4E1BnfHs1hHuD5TImPoNItNa1gk4ySzfeZySzu3qzEn5zIlrc4cUkrIRETBIREQDz/ERKZ6UREQBERAEREAREQBERAEREAREQBERAEREAREQBERAErKRAM7oTpE6XUVXD9xssPNDs6/MEzuFNysqupyrAMpHIqRkH6TgUn3w+6zKoGkubAz+xduW+5rJ8N+Xvjym2lK2hz8fQzLOuG/d/CRdLdWVtqurotNC3FWtQKGqd1ZWVuHmjZUbqR6gyIWfD3WA91qWHge0ZfyKzp8pNsqcZblCliatLSL9DnXR/w7sJBuuRR4isGxvYFsAfQyb9EdEUaROClMA7sx3dj5sfH25TPkC64ddeEtRpG35WXDfHmlfmf4vpMWjDUm6lfEvLe/oiV67p3SUNwW6itG/CTkj3A5fOZ9dgYBlIKkZBU5BB5EHxE4EzHJJ3J3JO5JPiT4mdH+FmtdqrqjkrWVdM+HHxcSj5rn5zEal3Y2V8H2UMyd+ZOIiJsKQiIgHn+IiUz0oiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAlJWIMkz6s9e7KQK9SGsrGArje1R65++Pz95N26zaEJx/aqcc8Bsv/AGfe/KcWlJNVGkUamBpyd1p3fNCYdauuz6gGrT8VdR2ZjtY48tvur6cz4+Uh03HQ3VrV6veqrCfjsylfyOMt8gZO+huoOmqw17G5vwnu1f282+Z+UzaU3cdrQwyyx9N/H54EA6D6A1GsbFSHh5M7ZFa+7eJ9BvOtdXuha9FSK0OSTxWOebPjBPoPITYVKiAIoVQB3UUBQFGBso8BtPuboQUTnV8TKtpsuQiVlJIriIiDJ5/iIlM9KIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJWIUeQJ8ABuSfIQD709LWMqIpYscKqjJJ8hOl9Weo1VIFmpC2WcwnOpPf8AGffb9Zl9S+rA0dfaWKDe473j2an9wevmflJFfqK0GXdVBOMscDM3wppK7OPicVKo8lPbpu/4Wek9SaqHcAd0AgHljIHL2MybGABJOwySfQb5kf1nSC3V2Vci7qtQAPep7RF4/rxS9qekFfSsq8TO1IyERnAYpnhZlGFPvM50388TV/neVJqzvr3O1v2RfWdMWPqO2UkEHuDyQclPofH3k66N1q31LYu3ENx5MNmX5GRPovS6B6OO2whxxca8YGfw8K8ztjlMnq6bfsli1q/E7kI+BwLsoZixPhg8pppSaevHU6OOp05wtBOORqOuis/e2/j1JFZqCL0TwNbt/UrLj8szKkav6T47arRW/Eg4Ch2YmzC4GfMsPpN9prbG3avgGxGWDNv5gDunl4mb4yu2curScIxfTXVb3fXlYvxESZqPP8REpnpRERAEREAREQBERAEREAREQBERAEREAREQBERAEREARErAEm/w26B7RzqrB3UPDSD42+L+y8vc+khmloa10rT7zMqL/MxwP1ncdDpU01CVr92tQvqccz7k5PzmynG7uUMdWcY5Fu/b5oZUqDMcGxuSkDO5Tvb+WSMfTPKVZbF3758wy7Y91XMsnHujE6V04L6d8DiF1QLePD3iBnyzM+utVGFUAc8KMDfnsJ8VuH5gZGG8CP4WU/I7+kuyKWtzZKd4qPI0Wo6q0O5YM6AnJRcEeuMjIE3Gm06VIqIMKowBz+p8TLgYZIyMgAkeODkA/kfpNb1l6Q+zaS20HvBeFP527qn5E5+UwoxjdpE5VqtbLCUm+C9i5QhGsubwams/1cRU/kqzPkL6pdcaTUlF7FHUCtbG/wCG4AwuW/dbHnt6yaxC1tDFaM4ytNWaVvLQpERJGs8/xESmelEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBKykrAJP8ADjSizXKT/wBNXtH82yD/AFzqerPd+a/6lnN/hY4GqtHiaWx8rEz+s6NrjhD7g/Q5/wASxS/E4mNb7drovYpo+l6AKgbNrF/Z5BweF2TbbmcDnzzNpVcrDKnM5rrdYyJo2UcLV1AgnhYEm1znAJ29GAMt19OahNqmWlQMcFA4U5k5w2d8sd8x/rSdn6dy/ZN/RpzV6b579JNLZcreuxONVatTXuR3UUuQPYsfzB+s13VjrFVrEGDi5VBtrO2/Isnmuf13joJTqNKwtZmNisrsTliGe1eft+k1XVXqjbo9Q1r2KwCMiLXnibON2BwBy5ZO/jJZm2mtmaOzpwjOM390bW5PmOm9Hrh0lVbpwxRhUjEEcHCrHjSwHw3J+e28yfiPWToSV5LZWzfy94Z+pE2PRvWHT3qp4wjM5qWu0jtM5wO6PPI+ZxLj6lXFleorWtGfsaxay/tQ3LhHrkeOfaRsrOz3MqU4Ti5R/Hwvr6+BxUGde6iap7dBUXJJUvWCeZVWwv0G39M1rfDzTcee1uCZzwAL9A2OUlej0yVItdahUUYVRyA/3kadNxbbLGMxVOrFKPP5/S7ERNxQPP8AERKZ6UREQBERAEREAREQBERAEREAREQBERAEREAREQBERAErEQCWfDJSdd7V2k+2VH6kTpuqA4RxfdyOL+U5H+ZFPhr0QaqH1DjDXYC559ku5P8AUfyAkxlmmrROFi5qVZ27iE6jqnqFYhOB18DxcJx4ZB8ZZXqxqiccCj1Lrge+N/yk1fTLggDhPgVyMH2Bn0KNu8STuSQWA3OdhnlNfYQLK+q4ji0/D/jMPo/Simk1h8cC8JfybBZm35YLEyxp6vtOk4KtW7H7n2hPvkq2/l4bfPnMrpa+2mgtRQLGBACbnZjgtgc+f6yC9E9GX/aBpbLXoz+34VOQWABAGGxnA8c/ck27NJL53lelT7RSm5Wad+D23dt+PcSHonqx2Gqdii2VlFKNbguLsg5A88539RHXLTaq4YSpDXWPtHaZ/acahsoozzxvy8RvtN9bTabkcXYQKwevhHeY8mLeGPIY95h6XW6k6qytqeGoAsjvzIHcPDw5G7b94g4PKZyq1iMa03PtHZtLj5efdp0LXVOtuw7VrrbGtw7dp+6wyCFzvj8uWJuppOtFetIpbR4LK5LKSApBXA4uI7rz5b77TeGSWmhqm7vNzvpy+cCkREyRPP8AERKZ6UREQBERAEREAREQBERAEREAREQBERAEREASsT5AgFZQyb9XeoNloFmqZq1O4RcdqR/ETsntz9pNdF1b0VA7mmrz+Jx2jf3NkzYqbe5SqY6nF2jr7eZxRVJIABJOwA3JPkBJr1V6kPawt1SlKxgittnfx7w5ovvv7To9GmrQ5WtFPmqqp+oEuTYqST1KlXHzkrRVvV+yKbAeAAHsAB+glv7QvmfcBiPriUcZfBGQqhseuSM+uMfnMS/p7TIxVrhkbHhDOAfIlQRJuSW5ThTlN2im+4+9fq+CtrCG4RgKqnhZ2LBVHF+6CxH6naajofpxL7OBQgJPCHq7TAfhdlDBwONWCP3v4eQyDNpZq9LqUas3VsGGCGbhbzBHFggggH5TX0aTR6M9obgxGWUfs+LiIIL8NYBZsMRk7AE4xkyN9bp6G2MNHFxebgb+p+JQeWRnH6iYj8X2pMVV4KNmwkdqOEjuqOZHe/OXdA/FUjYI4hx4PMcXeAPrvIL8QOlLqdbSanKGuoFSMEZdm4sg7EEKBj0mW7K5GjSdSeRb6mwv6V1f2silGUXfsUGrBCB68cTIB5/nmSnXLcaiKXRbNiCw4l2OSMevL5zV9V+lhr6Fsete0rYo22QHwDxpnlkEfnN9EVpuZqv7lFxs1o+NygHz/wDucREkahERAPP8REpnpRERAEREAREQBERAEREAREQBERAEREAREQCs6B8OurqkDV2rncilTyGMg2nzOdh7E+U58fGd26JQLp9OFGB2Vew/kE2U0myj9QqSjBRXEy5SIlk5AiImAYfSdLtW3ZY48EYbYMh+8hPhnzkJ0uELrjgtyQBZwqioQQyksCfYj0nQ5Y1+gptB7StWI+6SO8PZuYmqpC+paw+LVGLjJXT/AF6NdGc31VvE2cDGABgAbAc2828zM3oHoltTZ90itSC7chj8IPiT+nykgXoHTcX/AAz/AHv/AO03y6dK1VEUKo5BRgTVGheV5F+t9UiqfZ0U09rvh76lyaPrH1ap1vCWZkdMgOmD3TvwsDzGZvJSWWk9zjwlKDzRdma7oLoerR1dnWWOSXZm+8zEAZ22GwAxNjETKVg227vcREQYEREA/9k=" alt="Blood Donor Community" />
          <div className="text-overlay">
            <h1>Welcome to the Blood Donor Community</h1>
            <p>Together, we save lives!</p>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Our mission is to connect blood donors with patients in need and
            create a supportive community around blood donation.
          </p>
        </section>
        <section>
          <h2>Why Donate Blood?</h2>
          <p>
            Blood donation is a simple and effective way to save lives. By
            donating blood, you can help patients in emergency situations,
            undergoing surgeries, and those with medical conditions.
          </p>
        </section>
        <section>
          <h2>How to Donate</h2>
          <p>
            Donating blood is easy! You can visit your local blood donation
            center or attend one of our community blood drives. Every donation
            makes a difference.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Blood Donor Community</p>
      </footer>
    </div>
  );
};

export default HomePage;
