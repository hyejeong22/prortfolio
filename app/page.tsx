// app/page.tsx
'use client' // 클라이언트 컴포넌트로 지정

import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <video style={styles.video} controls>
        <source src="/video/m.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // 수평 중앙 정렬
    alignItems: 'center', // 수직 중앙 정렬
    height: '100vh', // 화면 전체 높이를 차지
  },
  video: {
    width: '80%', // 영상 너비 80%로 설정
    maxWidth: '800px', // 최대 너비 800px로 설정
    borderRadius: '10px', // 영상 모서리 둥글게 설정
  },
}

export default HomePage
