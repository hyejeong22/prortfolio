'use client' // 클라이언트 컴포넌트로 지정

import { useState, useEffect } from 'react'

const Hobbies: React.FC = () => {
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null)

  // 취미별 이미지 URL을 객체로 관리
  const hobbyImages: { [key: string]: string } = {
    요리: '/images/cooking.jpg',
    운동: '/images/exercise.jpg',
    사진찍기: '/images/photography.jpg',
    맛집탐방: '/images/restaurant.jpg',
    트리사냥: '/images/tree_hunting.jpg',
  }

  // 취미 클릭 시 이미지 보이기
  const handleClick = (hobby: string) => {
    if (selectedHobby === hobby) {
      setSelectedHobby(null) // 이미 선택된 취미를 클릭하면 사진 사라짐
    } else {
      setSelectedHobby(hobby) // 새 취미를 클릭하면 해당 이미지 보이기
    }
  }

  // 전체 페이지에서 클릭 이벤트 감지
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const hobbyElement = document.getElementById('hobby-list')
      const imageElement = document.getElementById('hobby-image')

      // 취미 목록이나 이미지가 아닌 곳을 클릭하면 사진 사라짐
      if (
        hobbyElement &&
        !hobbyElement.contains(e.target as Node) &&
        imageElement &&
        !imageElement.contains(e.target as Node)
      ) {
        setSelectedHobby(null)
      }
    }

    // 문서 전체에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleDocumentClick)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      {/* 취미 목록 */}
      <div id="hobby-list">
        <h2 onClick={() => handleClick('요리')}>요리</h2>
        <h2 onClick={() => handleClick('운동')}>운동</h2>
        <h2 onClick={() => handleClick('사진찍기')}>사진 찍기</h2>
        <h2 onClick={() => handleClick('맛집탐방')}>맛집 탐방</h2>
        <h2 onClick={() => handleClick('트리사냥')}>트리 사냥</h2>
      </div>

      {/* 선택된 취미에 맞는 이미지 출력 */}
      {selectedHobby && (
        <div id="hobby-image" style={{ marginTop: '20px' }}>
          <img
            src={hobbyImages[selectedHobby]}
            alt={selectedHobby}
            style={{
              width: '300px',
              height: 'auto',
              marginTop: '20px',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Hobbies
