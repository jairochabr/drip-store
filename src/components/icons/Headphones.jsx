import * as React from "react";

const Headphone = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
    <mask maskUnits="userSpaceOnUse" x={-0.186035} y={1.75} width={61} height={61} fill="black">
    <rect fill="white" x={-0.186035} y={1.75} width={61} height={61}/>
    <path d="M27.1365 2.50971C20.4765 3.3702 14.7347 6.19587 10.1436 10.8937C8.69076 12.3705 7.91202 13.3356 6.77297 15.0682C5.14575 17.5102 3.85559 20.4405 3.13496 23.3243C2.48408 25.9174 2.33298 27.2779 2.3446 30.4176C2.3446 32.8595 2.61193 37.5341 2.7979 38.5573C2.85601 38.8713 2.82114 38.9294 2.47245 39.1039C1.85643 39.3946 1.40314 39.8248 1.12418 40.4062C0.577901 41.4877 0.577901 41.4412 2.58868 50.3833C4.65758 59.6045 4.58784 59.4068 5.73852 60.0929C6.62187 60.6278 7.16815 60.6743 8.64427 60.372C9.57411 60.1743 9.87631 60.1394 9.9228 60.2557C10.0274 60.5697 10.7945 61.2906 11.2595 61.5115C11.9917 61.872 13.0261 61.8255 15.1183 61.3604C17.1291 60.9069 17.3964 60.7906 18.0008 60.1278C18.5819 59.4882 18.7795 58.9766 18.7795 58.1742C18.7795 57.3137 14.2349 36.9759 13.8979 36.3131C13.5608 35.6619 12.7937 35.034 12.0266 34.813C11.457 34.6502 11.2943 34.6502 10.4923 34.8014L9.60898 34.9642L9.50438 33.8595C9.33003 31.8013 9.39977 27.5105 9.62061 26.3244C10.7597 20.2428 14.3047 15.1729 19.6164 11.9868C23.2312 9.82389 27.8106 8.75409 32.0414 9.07969C39.7591 9.6611 46.4191 14.1147 49.6851 20.8824C51.3937 24.4174 51.9051 27.3477 51.661 32.1618C51.5913 33.627 51.5099 34.8596 51.4867 34.9061C51.4518 34.941 51.0334 34.8944 50.5336 34.8014C49.72 34.6502 49.5689 34.6502 48.9878 34.813C48.2206 35.034 47.4535 35.6619 47.1164 36.3131C46.7794 36.9759 42.2348 57.3137 42.2348 58.1742C42.2348 58.9417 42.4324 59.465 42.9322 60.0464C43.5366 60.7208 43.9782 60.9185 45.8844 61.3487C48.023 61.8255 49.0226 61.872 49.7549 61.5115C50.2198 61.2906 50.9869 60.5697 51.0915 60.2557C51.138 60.1394 51.4402 60.1743 52.37 60.372C53.8462 60.6743 54.3925 60.6278 55.2758 60.0929C56.4149 59.4068 56.3684 59.5812 58.3791 50.674C60.3783 41.8016 60.4364 41.4412 59.9018 40.4179C59.6344 39.9062 59.1114 39.3946 58.4605 39.0225C58.2862 38.9178 58.2745 38.7899 58.3908 37.6271C58.8441 32.906 58.8557 27.8826 58.4024 25.3593C56.5543 14.9054 48.8367 6.41681 38.4689 3.41672C35.9467 2.69576 34.0638 2.42831 31.0302 2.3818C29.2402 2.35854 27.9617 2.39343 27.1365 2.50971ZM33.9592 4.02139C44.1991 5.35864 52.6722 12.1844 55.9267 21.6964C57.3098 25.7895 57.5655 29.3012 56.996 36.5224C56.8333 38.6039 56.8333 38.6039 56.3451 38.4759C56.0197 38.3945 55.9616 38.3248 55.9616 38.0341C55.9616 37.0922 54.9271 35.8596 53.8578 35.5456C53.5207 35.441 53.172 35.3596 53.0907 35.3596C52.9628 35.3596 52.9396 35.2084 52.9861 34.6851C53.1488 32.906 53.1837 32.2199 53.172 30.0687C53.172 28.5803 53.1139 27.3244 52.9977 26.5919C52.4514 23.022 51.0334 19.58 48.9064 16.6962C47.8719 15.3008 45.3497 12.8124 43.9899 11.8472C40.8749 9.63784 37.4461 8.26571 33.7267 7.74244C32.146 7.5215 28.9962 7.5215 27.3573 7.75406C17.8962 9.06806 10.1669 16.2194 8.31883 25.3244C7.81904 27.7663 7.76092 29.4989 8.03988 34.1037C8.09799 35.1619 8.08637 35.3596 7.93527 35.3596C7.84228 35.3596 7.50522 35.441 7.17977 35.534C6.12208 35.848 5.05276 37.0922 5.05276 38.0224C5.05276 38.3597 4.89004 38.4992 4.48323 38.4992C4.30889 38.4992 4.2624 38.3597 4.20428 37.7782C3.97182 35.4526 3.85559 32.9874 3.84397 30.4176C3.83234 27.2082 3.9602 26.1267 4.61109 23.5569C6.77297 15.1148 13.3748 8.06802 21.8015 5.24236C23.6496 4.62606 26.0207 4.10278 27.8339 3.92836C29.0543 3.80045 32.7155 3.85859 33.9592 4.02139ZM11.9917 36.4061C12.2009 36.5224 12.445 36.7433 12.538 36.8945C12.631 37.0457 13.7584 41.9063 15.0602 47.6972L17.408 58.2324L17.1872 58.6742C17.071 58.9184 16.8385 59.2208 16.6758 59.3371C16.269 59.6278 12.7821 60.3952 12.2823 60.3022C12.0731 60.2673 11.736 60.0929 11.5384 59.9068C11.1316 59.5464 11.3757 60.558 8.13286 45.9878L6.41265 38.2899L6.63349 37.848C6.76134 37.6038 6.98218 37.3131 7.1449 37.1968C7.43548 36.9875 10.6318 36.1968 11.2711 36.1852C11.4687 36.1735 11.7825 36.2782 11.9917 36.4061ZM51.754 36.5805C52.7536 36.8015 53.7067 37.0806 53.8694 37.1968C54.0321 37.3131 54.253 37.6038 54.3808 37.848L54.6017 38.2899L52.8931 45.9297C49.5457 60.9418 49.8827 59.5464 49.4759 59.9068C49.2783 60.0813 48.9413 60.2673 48.732 60.3022C48.2323 60.3952 44.7453 59.6278 44.3385 59.3371C44.1758 59.2208 43.9434 58.9184 43.8271 58.6742L43.6063 58.2324L45.9541 47.6972C47.2559 41.9063 48.3834 37.0457 48.4763 36.8945C48.6972 36.5573 49.3132 36.1735 49.6619 36.1735C49.813 36.1735 50.7544 36.3596 51.754 36.5805ZM5.32009 40.2086C5.35496 40.3946 6.2848 44.5343 7.37736 49.4298C8.46993 54.3253 9.37652 58.4068 9.38815 58.4998C9.41139 58.6742 8.12124 59.058 7.40061 59.0696C6.8892 59.0812 6.2848 58.7905 6.04072 58.4184C5.8315 58.1045 2.26324 42.3482 2.26324 41.7435C2.26324 41.29 2.62355 40.6853 3.00711 40.4876C3.25119 40.3481 4.76219 39.9411 5.1225 39.9062C5.19224 39.8946 5.28522 40.0341 5.32009 40.2086ZM56.8682 40.1272C57.4028 40.2551 57.9491 40.4411 58.0769 40.5341C58.4605 40.79 58.7511 41.3132 58.7511 41.7319C58.7511 42.3249 55.1828 58.1045 54.9736 58.4184C54.7295 58.7905 54.1251 59.0812 53.6137 59.0696C52.8931 59.058 51.6029 58.6742 51.6262 58.4998C51.6378 58.4068 52.5444 54.3253 53.637 49.4298C54.7295 44.5343 55.6594 40.3946 55.6942 40.2086C55.7291 40.0341 55.7872 39.8946 55.8337 39.8946C55.8686 39.8946 56.3451 39.9992 56.8682 40.1272Z"/>
    </mask>
    <path d="M27.1365 2.50971C20.4765 3.3702 14.7347 6.19587 10.1436 10.8937C8.69076 12.3705 7.91202 13.3356 6.77297 15.0682C5.14575 17.5102 3.85559 20.4405 3.13496 23.3243C2.48408 25.9174 2.33298 27.2779 2.3446 30.4176C2.3446 32.8595 2.61193 37.5341 2.7979 38.5573C2.85601 38.8713 2.82114 38.9294 2.47245 39.1039C1.85643 39.3946 1.40314 39.8248 1.12418 40.4062C0.577901 41.4877 0.577901 41.4412 2.58868 50.3833C4.65758 59.6045 4.58784 59.4068 5.73852 60.0929C6.62187 60.6278 7.16815 60.6743 8.64427 60.372C9.57411 60.1743 9.87631 60.1394 9.9228 60.2557C10.0274 60.5697 10.7945 61.2906 11.2595 61.5115C11.9917 61.872 13.0261 61.8255 15.1183 61.3604C17.1291 60.9069 17.3964 60.7906 18.0008 60.1278C18.5819 59.4882 18.7795 58.9766 18.7795 58.1742C18.7795 57.3137 14.2349 36.9759 13.8979 36.3131C13.5608 35.6619 12.7937 35.034 12.0266 34.813C11.457 34.6502 11.2943 34.6502 10.4923 34.8014L9.60898 34.9642L9.50438 33.8595C9.33003 31.8013 9.39977 27.5105 9.62061 26.3244C10.7597 20.2428 14.3047 15.1729 19.6164 11.9868C23.2312 9.82389 27.8106 8.75409 32.0414 9.07969C39.7591 9.6611 46.4191 14.1147 49.6851 20.8824C51.3937 24.4174 51.9051 27.3477 51.661 32.1618C51.5913 33.627 51.5099 34.8596 51.4867 34.9061C51.4518 34.941 51.0334 34.8944 50.5336 34.8014C49.72 34.6502 49.5689 34.6502 48.9878 34.813C48.2206 35.034 47.4535 35.6619 47.1164 36.3131C46.7794 36.9759 42.2348 57.3137 42.2348 58.1742C42.2348 58.9417 42.4324 59.465 42.9322 60.0464C43.5366 60.7208 43.9782 60.9185 45.8844 61.3487C48.023 61.8255 49.0226 61.872 49.7549 61.5115C50.2198 61.2906 50.9869 60.5697 51.0915 60.2557C51.138 60.1394 51.4402 60.1743 52.37 60.372C53.8462 60.6743 54.3925 60.6278 55.2758 60.0929C56.4149 59.4068 56.3684 59.5812 58.3791 50.674C60.3783 41.8016 60.4364 41.4412 59.9018 40.4179C59.6344 39.9062 59.1114 39.3946 58.4605 39.0225C58.2862 38.9178 58.2745 38.7899 58.3908 37.6271C58.8441 32.906 58.8557 27.8826 58.4024 25.3593C56.5543 14.9054 48.8367 6.41681 38.4689 3.41672C35.9467 2.69576 34.0638 2.42831 31.0302 2.3818C29.2402 2.35854 27.9617 2.39343 27.1365 2.50971ZM33.9592 4.02139C44.1991 5.35864 52.6722 12.1844 55.9267 21.6964C57.3098 25.7895 57.5655 29.3012 56.996 36.5224C56.8333 38.6039 56.8333 38.6039 56.3451 38.4759C56.0197 38.3945 55.9616 38.3248 55.9616 38.0341C55.9616 37.0922 54.9271 35.8596 53.8578 35.5456C53.5207 35.441 53.172 35.3596 53.0907 35.3596C52.9628 35.3596 52.9396 35.2084 52.9861 34.6851C53.1488 32.906 53.1837 32.2199 53.172 30.0687C53.172 28.5803 53.1139 27.3244 52.9977 26.5919C52.4514 23.022 51.0334 19.58 48.9064 16.6962C47.8719 15.3008 45.3497 12.8124 43.9899 11.8472C40.8749 9.63784 37.4461 8.26571 33.7267 7.74244C32.146 7.5215 28.9962 7.5215 27.3573 7.75406C17.8962 9.06806 10.1669 16.2194 8.31883 25.3244C7.81904 27.7663 7.76092 29.4989 8.03988 34.1037C8.09799 35.1619 8.08637 35.3596 7.93527 35.3596C7.84228 35.3596 7.50522 35.441 7.17977 35.534C6.12208 35.848 5.05276 37.0922 5.05276 38.0224C5.05276 38.3597 4.89004 38.4992 4.48323 38.4992C4.30889 38.4992 4.2624 38.3597 4.20428 37.7782C3.97182 35.4526 3.85559 32.9874 3.84397 30.4176C3.83234 27.2082 3.9602 26.1267 4.61109 23.5569C6.77297 15.1148 13.3748 8.06802 21.8015 5.24236C23.6496 4.62606 26.0207 4.10278 27.8339 3.92836C29.0543 3.80045 32.7155 3.85859 33.9592 4.02139ZM11.9917 36.4061C12.2009 36.5224 12.445 36.7433 12.538 36.8945C12.631 37.0457 13.7584 41.9063 15.0602 47.6972L17.408 58.2324L17.1872 58.6742C17.071 58.9184 16.8385 59.2208 16.6758 59.3371C16.269 59.6278 12.7821 60.3952 12.2823 60.3022C12.0731 60.2673 11.736 60.0929 11.5384 59.9068C11.1316 59.5464 11.3757 60.558 8.13286 45.9878L6.41265 38.2899L6.63349 37.848C6.76134 37.6038 6.98218 37.3131 7.1449 37.1968C7.43548 36.9875 10.6318 36.1968 11.2711 36.1852C11.4687 36.1735 11.7825 36.2782 11.9917 36.4061ZM51.754 36.5805C52.7536 36.8015 53.7067 37.0806 53.8694 37.1968C54.0321 37.3131 54.253 37.6038 54.3808 37.848L54.6017 38.2899L52.8931 45.9297C49.5457 60.9418 49.8827 59.5464 49.4759 59.9068C49.2783 60.0813 48.9413 60.2673 48.732 60.3022C48.2323 60.3952 44.7453 59.6278 44.3385 59.3371C44.1758 59.2208 43.9434 58.9184 43.8271 58.6742L43.6063 58.2324L45.9541 47.6972C47.2559 41.9063 48.3834 37.0457 48.4763 36.8945C48.6972 36.5573 49.3132 36.1735 49.6619 36.1735C49.813 36.1735 50.7544 36.3596 51.754 36.5805ZM5.32009 40.2086C5.35496 40.3946 6.2848 44.5343 7.37736 49.4298C8.46993 54.3253 9.37652 58.4068 9.38815 58.4998C9.41139 58.6742 8.12124 59.058 7.40061 59.0696C6.8892 59.0812 6.2848 58.7905 6.04072 58.4184C5.8315 58.1045 2.26324 42.3482 2.26324 41.7435C2.26324 41.29 2.62355 40.6853 3.00711 40.4876C3.25119 40.3481 4.76219 39.9411 5.1225 39.9062C5.19224 39.8946 5.28522 40.0341 5.32009 40.2086ZM56.8682 40.1272C57.4028 40.2551 57.9491 40.4411 58.0769 40.5341C58.4605 40.79 58.7511 41.3132 58.7511 41.7319C58.7511 42.3249 55.1828 58.1045 54.9736 58.4184C54.7295 58.7905 54.1251 59.0812 53.6137 59.0696C52.8931 59.058 51.6029 58.6742 51.6262 58.4998C51.6378 58.4068 52.5444 54.3253 53.637 49.4298C54.7295 44.5343 55.6594 40.3946 55.6942 40.2086C55.7291 40.0341 55.7872 39.8946 55.8337 39.8946C55.8686 39.8946 56.3451 39.9992 56.8682 40.1272Z" fill="#8F8F8F"/>
    <path d="M27.1365 2.50971C20.4765 3.3702 14.7347 6.19587 10.1436 10.8937C8.69076 12.3705 7.91202 13.3356 6.77297 15.0682C5.14575 17.5102 3.85559 20.4405 3.13496 23.3243C2.48408 25.9174 2.33298 27.2779 2.3446 30.4176C2.3446 32.8595 2.61193 37.5341 2.7979 38.5573C2.85601 38.8713 2.82114 38.9294 2.47245 39.1039C1.85643 39.3946 1.40314 39.8248 1.12418 40.4062C0.577901 41.4877 0.577901 41.4412 2.58868 50.3833C4.65758 59.6045 4.58784 59.4068 5.73852 60.0929C6.62187 60.6278 7.16815 60.6743 8.64427 60.372C9.57411 60.1743 9.87631 60.1394 9.9228 60.2557C10.0274 60.5697 10.7945 61.2906 11.2595 61.5115C11.9917 61.872 13.0261 61.8255 15.1183 61.3604C17.1291 60.9069 17.3964 60.7906 18.0008 60.1278C18.5819 59.4882 18.7795 58.9766 18.7795 58.1742C18.7795 57.3137 14.2349 36.9759 13.8979 36.3131C13.5608 35.6619 12.7937 35.034 12.0266 34.813C11.457 34.6502 11.2943 34.6502 10.4923 34.8014L9.60898 34.9642L9.50438 33.8595C9.33003 31.8013 9.39977 27.5105 9.62061 26.3244C10.7597 20.2428 14.3047 15.1729 19.6164 11.9868C23.2312 9.82389 27.8106 8.75409 32.0414 9.07969C39.7591 9.6611 46.4191 14.1147 49.6851 20.8824C51.3937 24.4174 51.9051 27.3477 51.661 32.1618C51.5913 33.627 51.5099 34.8596 51.4867 34.9061C51.4518 34.941 51.0334 34.8944 50.5336 34.8014C49.72 34.6502 49.5689 34.6502 48.9878 34.813C48.2206 35.034 47.4535 35.6619 47.1164 36.3131C46.7794 36.9759 42.2348 57.3137 42.2348 58.1742C42.2348 58.9417 42.4324 59.465 42.9322 60.0464C43.5366 60.7208 43.9782 60.9185 45.8844 61.3487C48.023 61.8255 49.0226 61.872 49.7549 61.5115C50.2198 61.2906 50.9869 60.5697 51.0915 60.2557C51.138 60.1394 51.4402 60.1743 52.37 60.372C53.8462 60.6743 54.3925 60.6278 55.2758 60.0929C56.4149 59.4068 56.3684 59.5812 58.3791 50.674C60.3783 41.8016 60.4364 41.4412 59.9018 40.4179C59.6344 39.9062 59.1114 39.3946 58.4605 39.0225C58.2862 38.9178 58.2745 38.7899 58.3908 37.6271C58.8441 32.906 58.8557 27.8826 58.4024 25.3593C56.5543 14.9054 48.8367 6.41681 38.4689 3.41672C35.9467 2.69576 34.0638 2.42831 31.0302 2.3818C29.2402 2.35854 27.9617 2.39343 27.1365 2.50971ZM33.9592 4.02139C44.1991 5.35864 52.6722 12.1844 55.9267 21.6964C57.3098 25.7895 57.5655 29.3012 56.996 36.5224C56.8333 38.6039 56.8333 38.6039 56.3451 38.4759C56.0197 38.3945 55.9616 38.3248 55.9616 38.0341C55.9616 37.0922 54.9271 35.8596 53.8578 35.5456C53.5207 35.441 53.172 35.3596 53.0907 35.3596C52.9628 35.3596 52.9396 35.2084 52.9861 34.6851C53.1488 32.906 53.1837 32.2199 53.172 30.0687C53.172 28.5803 53.1139 27.3244 52.9977 26.5919C52.4514 23.022 51.0334 19.58 48.9064 16.6962C47.8719 15.3008 45.3497 12.8124 43.9899 11.8472C40.8749 9.63784 37.4461 8.26571 33.7267 7.74244C32.146 7.5215 28.9962 7.5215 27.3573 7.75406C17.8962 9.06806 10.1669 16.2194 8.31883 25.3244C7.81904 27.7663 7.76092 29.4989 8.03988 34.1037C8.09799 35.1619 8.08637 35.3596 7.93527 35.3596C7.84228 35.3596 7.50522 35.441 7.17977 35.534C6.12208 35.848 5.05276 37.0922 5.05276 38.0224C5.05276 38.3597 4.89004 38.4992 4.48323 38.4992C4.30889 38.4992 4.2624 38.3597 4.20428 37.7782C3.97182 35.4526 3.85559 32.9874 3.84397 30.4176C3.83234 27.2082 3.9602 26.1267 4.61109 23.5569C6.77297 15.1148 13.3748 8.06802 21.8015 5.24236C23.6496 4.62606 26.0207 4.10278 27.8339 3.92836C29.0543 3.80045 32.7155 3.85859 33.9592 4.02139ZM11.9917 36.4061C12.2009 36.5224 12.445 36.7433 12.538 36.8945C12.631 37.0457 13.7584 41.9063 15.0602 47.6972L17.408 58.2324L17.1872 58.6742C17.071 58.9184 16.8385 59.2208 16.6758 59.3371C16.269 59.6278 12.7821 60.3952 12.2823 60.3022C12.0731 60.2673 11.736 60.0929 11.5384 59.9068C11.1316 59.5464 11.3757 60.558 8.13286 45.9878L6.41265 38.2899L6.63349 37.848C6.76134 37.6038 6.98218 37.3131 7.1449 37.1968C7.43548 36.9875 10.6318 36.1968 11.2711 36.1852C11.4687 36.1735 11.7825 36.2782 11.9917 36.4061ZM51.754 36.5805C52.7536 36.8015 53.7067 37.0806 53.8694 37.1968C54.0321 37.3131 54.253 37.6038 54.3808 37.848L54.6017 38.2899L52.8931 45.9297C49.5457 60.9418 49.8827 59.5464 49.4759 59.9068C49.2783 60.0813 48.9413 60.2673 48.732 60.3022C48.2323 60.3952 44.7453 59.6278 44.3385 59.3371C44.1758 59.2208 43.9434 58.9184 43.8271 58.6742L43.6063 58.2324L45.9541 47.6972C47.2559 41.9063 48.3834 37.0457 48.4763 36.8945C48.6972 36.5573 49.3132 36.1735 49.6619 36.1735C49.813 36.1735 50.7544 36.3596 51.754 36.5805ZM5.32009 40.2086C5.35496 40.3946 6.2848 44.5343 7.37736 49.4298C8.46993 54.3253 9.37652 58.4068 9.38815 58.4998C9.41139 58.6742 8.12124 59.058 7.40061 59.0696C6.8892 59.0812 6.2848 58.7905 6.04072 58.4184C5.8315 58.1045 2.26324 42.3482 2.26324 41.7435C2.26324 41.29 2.62355 40.6853 3.00711 40.4876C3.25119 40.3481 4.76219 39.9411 5.1225 39.9062C5.19224 39.8946 5.28522 40.0341 5.32009 40.2086ZM56.8682 40.1272C57.4028 40.2551 57.9491 40.4411 58.0769 40.5341C58.4605 40.79 58.7511 41.3132 58.7511 41.7319C58.7511 42.3249 55.1828 58.1045 54.9736 58.4184C54.7295 58.7905 54.1251 59.0812 53.6137 59.0696C52.8931 59.058 51.6029 58.6742 51.6262 58.4998C51.6378 58.4068 52.5444 54.3253 53.637 49.4298C54.7295 44.5343 55.6594 40.3946 55.6942 40.2086C55.7291 40.0341 55.7872 39.8946 55.8337 39.8946C55.8686 39.8946 56.3451 39.9992 56.8682 40.1272Z" stroke="#8F8F8F" strokeWidth={0.25} mask="url(#path-1-outside-1_309_922)"/>
    </svg>
  );
};

export default Headphone;
