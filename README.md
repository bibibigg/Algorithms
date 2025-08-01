# Algorithms

## 빈도수 세기 - validAnagram

시간 복잡도는 O(n), 문자의 길이가 다를시, str1에 있는 문자가 str2에 없을 시, str1에 있는 문자가 str2에 있지만 해당 문자의 수가 다를 시 false를 반환

## 다중 포인터 패턴 - countUniqueValues

시간 복잡도 O(n)으로 개선, 두개의 인덱스를 이용하여 두 숫자가 다를 시 카운트 및 left좌표 이동, 두 숫자가 같은경우 카운트 하지 않고 right좌표만 이동

## Sliding Window - maxSubarraySum

시간 복잡도 O(n), Sliding Window방식을 사용하여 주어진 숫자의 길이를 가진 배열의 합을 구한 뒤 해당 하위배열의 첫번째 값을 빼고 다음으로 들어올 값을 더하여 합을 계산
