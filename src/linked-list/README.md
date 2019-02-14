# 링크드 리스트

Javascript 를 이용한 링크드 리스트 구현, 테스트는 Jest 를 이용해서 진행

- Jest

## 이론

링크드 리스트는 선형의 순서를 가지는 데이터 집합(linear collection of data elements)이다. 여기서 선형의 순서란 메모리(물리적으로)에서 인접한 것이 아닌 각 노드가 다른 노드를 가리킴으로 발생하는 연관 순서를 말한다. 이 구조는 효율적인 삽입(insert)과 삭제(delete)를 가능하게하며 더 복잡한 구현으로는 부수적인 링크(link)를 두어 임의의 노드의 삭제 및 삽입을 가능하게 한다. (doubly-linked list)

## 한계

이러한 링크드 리스트의 단점은 access time(접근 시간)이 선형이라는 점이다. 그리고 파이프라인의 적용이 어렵다. 임의 접근(random access)와 같은 빠른 접근 방식은 어렵다. 이에 비해 배열(Array)는 cache locality 측면에서 링크드 리스트보다 더 효율적이다.

## 복잡도

### 공간 복잡도

Big-O(n)

### 시간 복잡도

| Access | Search | Insertion | Deletion |
|:---:|:---:|:---:|:---:|
| O(n) | O(n) | O(1) | O(1) |


## 구현 함수

@TODO: 정리 예정

## Pseudo Code

@TODO: 정리 예정