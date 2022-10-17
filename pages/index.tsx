import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Links from "../components/Link";
import NewsBlock from "../components/NewsBlock";
import { useAppDispatch } from "../store/hooks/redux";
import { login } from "../store/slices/UserSlice";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/auth", {
        headers: {
          authorization: "Bearer" + window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          dispatch(login(res.data.user));
        }
      });
  }, []);
  return (
    <Layout>
      <Links />
      <div className="container">
        <div className={styles.news}>
          <NewsBlock
            h1="Новости"
            text="Моргенштерн теряет прослушивания, это подводит автора к самым разным решениям в отношении своего творчества."
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 11H16C15.7348 11 15.4804 11.1054 15.2929 11.2929C15.1054 11.4804 15 11.7348 15 12C15 12.2652 15.1054 12.5196 15.2929 12.7071C15.4804 12.8946 15.7348 13 16 13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11ZM17 15H16C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16C18 15.7348 17.8946 15.4804 17.7071 15.2929C17.5196 15.1054 17.2652 15 17 15ZM11 9H17C17.2652 9 17.5196 8.89464 17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289C17.5196 7.10536 17.2652 7 17 7H11C10.7348 7 10.4804 7.10536 10.2929 7.29289C10.1054 7.48043 10 7.73478 10 8C10 8.26522 10.1054 8.51957 10.2929 8.70711C10.4804 8.89464 10.7348 9 11 9ZM21 3H7C6.73478 3 6.48043 3.10536 6.29289 3.29289C6.10536 3.48043 6 3.73478 6 4V7H3C2.73478 7 2.48043 7.10536 2.29289 7.29289C2.10536 7.48043 2 7.73478 2 8V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H18C19.0609 21 20.0783 20.5786 20.8284 19.8284C21.5786 19.0783 22 18.0609 22 17V4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3ZM6 18C6 18.2652 5.89464 18.5196 5.70711 18.7071C5.51957 18.8946 5.26522 19 5 19C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V9H6V18ZM20 17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H7.82C7.93642 18.6793 7.9973 18.3411 8 18V5H20V17ZM11 13H12C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11H11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13ZM11 17H12C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15H11C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17Z"
                fill="#40E5BE"
              />
            </svg>
          </NewsBlock>
          <NewsBlock
            h1="Последние обновления"
            text="Теперь можно добавлять в свою музыку не только треки, но и альбомы.
              Прослушивания на треках индивидуальны - это даёт защиту от накрутки"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 8H16C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6H10C9.73478 6 9.48043 6.10536 9.29289 6.29289C9.10536 6.48043 9 6.73478 9 7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8ZM8 12H16C16.2652 12 16.5196 11.8946 16.7071 11.7071C16.8946 11.5196 17 11.2652 17 11C17 10.7348 16.8946 10.4804 16.7071 10.2929C16.5196 10.1054 16.2652 10 16 10H8C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11C7 11.2652 7.10536 11.5196 7.29289 11.7071C7.48043 11.8946 7.73478 12 8 12ZM8 16H16C16.2652 16 16.5196 15.8946 16.7071 15.7071C16.8946 15.5196 17 15.2652 17 15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14H8C7.73478 14 7.48043 14.1054 7.29289 14.2929C7.10536 14.4804 7 14.7348 7 15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16ZM20 2H4C3.73478 2 3.48043 2.10536 3.29289 2.29289C3.10536 2.48043 3 2.73478 3 3V21C3 21.1857 3.05171 21.3678 3.14935 21.5257C3.24698 21.6837 3.38668 21.8114 3.55279 21.8944C3.71889 21.9775 3.90484 22.0126 4.08981 21.996C4.27477 21.9793 4.45143 21.9114 4.6 21.8L6.67 20.25L8.73 21.8C8.9031 21.9298 9.11363 22 9.33 22C9.54637 22 9.7569 21.9298 9.93 21.8L12 20.25L14.07 21.8C14.2431 21.9298 14.4536 22 14.67 22C14.8864 22 15.0969 21.9298 15.27 21.8L17.33 20.25L19.4 21.8C19.5493 21.9113 19.7267 21.9786 19.9122 21.9945C20.0977 22.0104 20.284 21.9742 20.45 21.89C20.6149 21.8069 20.7536 21.6798 20.8507 21.5227C20.9478 21.3656 20.9994 21.1847 21 21V3C21 2.73478 20.8946 2.48043 20.7071 2.29289C20.5196 2.10536 20.2652 2 20 2ZM19 19L17.93 18.2C17.7569 18.0702 17.5464 18 17.33 18C17.1136 18 16.9031 18.0702 16.73 18.2L14.67 19.75L12.6 18.2C12.4269 18.0702 12.2164 18 12 18C11.7836 18 11.5731 18.0702 11.4 18.2L9.33 19.75L7.27 18.2C7.0969 18.0702 6.88637 18 6.67 18C6.45363 18 6.2431 18.0702 6.07 18.2L5 19V4H19V19Z"
                fill="#40E5BE"
              />
            </svg>
          </NewsBlock>
        </div>
        <div className={styles.time}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M83.3333 54.9167V45.8333C83.3333 36.9928 79.8214 28.5143 73.5702 22.2631C67.319 16.0119 58.8405 12.5 50 12.5C41.1594 12.5 32.681 16.0119 26.4298 22.2631C20.1786 28.5143 16.6667 36.9928 16.6667 45.8333V54.9167C14.2352 55.7763 12.1292 57.367 10.6372 59.4706C9.14533 61.5742 8.34058 64.0877 8.33333 66.6667V75C8.33333 78.3152 9.65029 81.4946 11.9945 83.8388C14.3387 86.183 17.5181 87.5 20.8333 87.5H33.3333C34.4384 87.5 35.4982 87.061 36.2796 86.2796C37.061 85.4982 37.5 84.4384 37.5 83.3333V58.3333C37.5 57.2283 37.061 56.1685 36.2796 55.3871C35.4982 54.6057 34.4384 54.1667 33.3333 54.1667H25V45.8333C25 39.2029 27.6339 32.8441 32.3223 28.1557C37.0107 23.4673 43.3696 20.8333 50 20.8333C56.6304 20.8333 62.9893 23.4673 67.6777 28.1557C72.3661 32.8441 75 39.2029 75 45.8333V54.1667H66.6667C65.5616 54.1667 64.5018 54.6057 63.7204 55.3871C62.939 56.1685 62.5 57.2283 62.5 58.3333V83.3333C62.5 84.4384 62.939 85.4982 63.7204 86.2796C64.5018 87.061 65.5616 87.5 66.6667 87.5H79.1667C82.4819 87.5 85.6613 86.183 88.0055 83.8388C90.3497 81.4946 91.6667 78.3152 91.6667 75V66.6667C91.6594 64.0877 90.8547 61.5742 89.3628 59.4706C87.8708 57.367 85.7648 55.7763 83.3333 54.9167ZM29.1667 62.5V79.1667H20.8333C19.7283 79.1667 18.6685 78.7277 17.8871 77.9463C17.1057 77.1649 16.6667 76.1051 16.6667 75V66.6667C16.6667 65.5616 17.1057 64.5018 17.8871 63.7204C18.6685 62.939 19.7283 62.5 20.8333 62.5H29.1667ZM83.3333 75C83.3333 76.1051 82.8943 77.1649 82.1129 77.9463C81.3315 78.7277 80.2717 79.1667 79.1667 79.1667H70.8333V62.5H79.1667C80.2717 62.5 81.3315 62.939 82.1129 63.7204C82.8943 64.5018 83.3333 65.5616 83.3333 66.6667V75Z"
              fill="#40E5BE"
            />
          </svg>
          <div className={styles.block}>ВРЕМЯ ТВОИХ ПРОСЛУШИВАНИЙ</div>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 12.5C44.5283 12.5 39.1101 13.5777 34.0549 15.6717C28.9997 17.7656 24.4064 20.8348 20.5373 24.7039C12.7232 32.5179 8.33337 43.116 8.33337 54.1667V83.3333C8.33337 84.4384 8.77236 85.4982 9.55376 86.2796C10.3352 87.061 11.395 87.5 12.5 87.5H25C28.3152 87.5 31.4947 86.183 33.8389 83.8388C36.1831 81.4946 37.5 78.3152 37.5 75V66.6667C37.5 63.3515 36.1831 60.172 33.8389 57.8278C31.4947 55.4836 28.3152 54.1667 25 54.1667H16.6667C16.6667 45.3261 20.1786 36.8477 26.4298 30.5964C32.681 24.3452 41.1595 20.8333 50 20.8333C58.8406 20.8333 67.3191 24.3452 73.5703 30.5964C79.8215 36.8477 83.3334 45.3261 83.3334 54.1667H75C71.6848 54.1667 68.5054 55.4836 66.1612 57.8278C63.817 60.172 62.5 63.3515 62.5 66.6667V75C62.5 78.3152 63.817 81.4946 66.1612 83.8388C68.5054 86.183 71.6848 87.5 75 87.5H87.5C88.6051 87.5 89.6649 87.061 90.4463 86.2796C91.2277 85.4982 91.6667 84.4384 91.6667 83.3333V54.1667C91.6667 43.116 87.2768 32.5179 79.4628 24.7039C71.6488 16.8899 61.0507 12.5 50 12.5V12.5ZM25 62.5C26.1051 62.5 27.1649 62.939 27.9463 63.7204C28.7277 64.5018 29.1667 65.5616 29.1667 66.6667V75C29.1667 76.1051 28.7277 77.1649 27.9463 77.9463C27.1649 78.7277 26.1051 79.1667 25 79.1667H16.6667V62.5H25ZM83.3334 79.1667H75C73.895 79.1667 72.8352 78.7277 72.0538 77.9463C71.2724 77.1649 70.8334 76.1051 70.8334 75V66.6667C70.8334 65.5616 71.2724 64.5018 72.0538 63.7204C72.8352 62.939 73.895 62.5 75 62.5H83.3334V79.1667Z"
              fill="#40E5BE"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
}