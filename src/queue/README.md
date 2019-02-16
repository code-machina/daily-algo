# Queue(큐)

queue 는 추상 데이터 타입으로 집합내의 엔티티의 순서가 유지되는 구조이다. 주요 연산(operation)은 종단에 엔티티를 추가하는 것으로 이는 enqueue 라고 알려져 있다 그리고 맨 앞단에 엔티티가 제거된다. 이는 queue 가 FIFO(First-In-First-Out, 선입 선출)의 특성을 갖도록한다.

## Time Complexity (Big-O)

| Space | Search | Insertion | Deletion |
|:---:|:---:|:---:|:---:|
| O(n) | O(n) | O(1) | O(1) |