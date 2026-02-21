export interface Video {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  categoryColor: string;
  videoUrl: string;
}

export interface Category {
  id: string;
  label: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'all', label: 'All', color: '#58A6FF' },
  { id: 'arrays', label: 'Arrays', color: '#4FC3F7' },
  { id: 'linkedlists', label: 'Linked Lists', color: '#81C784' },
  { id: 'trees', label: 'Trees', color: '#FFB74D' },
  { id: 'sorting', label: 'Sorting', color: '#F06292' },
  { id: 'heaps', label: 'Heaps & Hash', color: '#CE93D8' },
  { id: 'graphs', label: 'Graphs', color: '#4DB6AC' },
  { id: 'dp', label: 'DP', color: '#FFF176' },
  { id: 'backtracking', label: 'Backtracking', color: '#FFCC80' },
  { id: 'strings', label: 'Strings', color: '#90CAF9' },
  { id: 'interview', label: 'Interview', color: '#EF9A9A' },
  { id: 'math', label: 'Math & Bits', color: '#B39DDB' },
];

export const videos: Video[] = [
  // Arrays (4 videos)
  {
    id: 'two-pointers',
    title: 'Two Pointers Technique',
    category: 'arrays',
    categoryLabel: 'Arrays',
    categoryColor: '#4FC3F7',
    videoUrl: '/videos/arrays/TwoPointersEducational.mp4'
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    category: 'arrays',
    categoryLabel: 'Arrays',
    categoryColor: '#4FC3F7',
    videoUrl: '/videos/arrays/SlidingWindowEducational.mp4'
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    category: 'arrays',
    categoryLabel: 'Arrays',
    categoryColor: '#4FC3F7',
    videoUrl: '/videos/arrays/BinarySearchEducational.mp4'
  },
  {
    id: 'prefix-sum',
    title: 'Prefix Sum',
    category: 'arrays',
    categoryLabel: 'Arrays',
    categoryColor: '#4FC3F7',
    videoUrl: '/videos/arrays/PrefixSumEducational.mp4'
  },

  // Linked Lists (7 videos)
  {
    id: 'linked-list-insert',
    title: 'Linked List Insert',
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/LinkedListInsertEducational.mp4'
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/ReverseLinkedListEducational.mp4'
  },
  {
    id: 'floyds-cycle',
    title: "Floyd's Cycle Detection",
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/FloydsCycleEducational.mp4'
  },
  {
    id: 'stack-operations',
    title: 'Stack Operations',
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/StackOperationsEducational.mp4'
  },
  {
    id: 'queue-operations',
    title: 'Queue Operations',
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/QueueOperationsEducational.mp4'
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/ValidParenthesesEducational.mp4'
  },
  {
    id: 'monotonic-stack',
    title: 'Monotonic Stack',
    category: 'linkedlists',
    categoryLabel: 'Linked Lists',
    categoryColor: '#81C784',
    videoUrl: '/videos/linkedlists/MonotonicStackEducational.mp4'
  },

  // Trees (5 videos)
  {
    id: 'tree-traversals',
    title: 'Binary Tree Traversals',
    category: 'trees',
    categoryLabel: 'Trees',
    categoryColor: '#FFB74D',
    videoUrl: '/videos/trees/BinaryTreeTraversalsEducational.mp4'
  },
  {
    id: 'bst-operations',
    title: 'BST Operations',
    category: 'trees',
    categoryLabel: 'Trees',
    categoryColor: '#FFB74D',
    videoUrl: '/videos/trees/BSTOperationsEducational.mp4'
  },
  {
    id: 'avl-rotations',
    title: 'AVL Rotations',
    category: 'trees',
    categoryLabel: 'Trees',
    categoryColor: '#FFB74D',
    videoUrl: '/videos/trees/AVLRotationsEducational.mp4'
  },
  {
    id: 'trie',
    title: 'Trie Data Structure',
    category: 'trees',
    categoryLabel: 'Trees',
    categoryColor: '#FFB74D',
    videoUrl: '/videos/trees/TrieEducational.mp4'
  },
  {
    id: 'lca',
    title: 'Lowest Common Ancestor',
    category: 'trees',
    categoryLabel: 'Trees',
    categoryColor: '#FFB74D',
    videoUrl: '/videos/trees/LCAEducational.mp4'
  },

  // Sorting (8 videos)
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/BubbleSortEducational.mp4'
  },
  {
    id: 'selection-sort',
    title: 'Selection Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/SelectionSortEducational.mp4'
  },
  {
    id: 'insertion-sort',
    title: 'Insertion Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/InsertionSortEducational.mp4'
  },
  {
    id: 'merge-sort',
    title: 'Merge Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/MergeSortEducational.mp4'
  },
  {
    id: 'quick-sort',
    title: 'Quick Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/QuickSortEducational.mp4'
  },
  {
    id: 'heap-sort',
    title: 'Heap Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/HeapSortEducational.mp4'
  },
  {
    id: 'counting-sort',
    title: 'Counting Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/CountingSortEducational.mp4'
  },
  {
    id: 'radix-sort',
    title: 'Radix Sort',
    category: 'sorting',
    categoryLabel: 'Sorting',
    categoryColor: '#F06292',
    videoUrl: '/videos/sorting/RadixSortEducational.mp4'
  },

  // Heaps & Hash (4 videos)
  {
    id: 'min-heap',
    title: 'Min Heap',
    category: 'heaps',
    categoryLabel: 'Heaps & Hash',
    categoryColor: '#CE93D8',
    videoUrl: '/videos/heaps/MinHeapEducational.mp4'
  },
  {
    id: 'hash-table',
    title: 'Hash Table',
    category: 'heaps',
    categoryLabel: 'Heaps & Hash',
    categoryColor: '#CE93D8',
    videoUrl: '/videos/heaps/HashTableEducational.mp4'
  },
  {
    id: 'priority-queue',
    title: 'Priority Queue',
    category: 'heaps',
    categoryLabel: 'Heaps & Hash',
    categoryColor: '#CE93D8',
    videoUrl: '/videos/heaps/PriorityQueueEducational.mp4'
  },
  {
    id: 'collision-resolution',
    title: 'Collision Resolution',
    category: 'heaps',
    categoryLabel: 'Heaps & Hash',
    categoryColor: '#CE93D8',
    videoUrl: '/videos/heaps/CollisionResolutionEducational.mp4'
  },

  // Graphs (4 videos)
  {
    id: 'bfs',
    title: 'Breadth-First Search',
    category: 'graphs',
    categoryLabel: 'Graphs',
    categoryColor: '#4DB6AC',
    videoUrl: '/videos/graphs/BFSEducational.mp4'
  },
  {
    id: 'dfs',
    title: 'Depth-First Search',
    category: 'graphs',
    categoryLabel: 'Graphs',
    categoryColor: '#4DB6AC',
    videoUrl: '/videos/graphs/DFSEducational.mp4'
  },
  {
    id: 'dijkstra',
    title: "Dijkstra's Algorithm",
    category: 'graphs',
    categoryLabel: 'Graphs',
    categoryColor: '#4DB6AC',
    videoUrl: '/videos/graphs/DijkstraEducational.mp4'
  },
  {
    id: 'topological-sort',
    title: 'Topological Sort',
    category: 'graphs',
    categoryLabel: 'Graphs',
    categoryColor: '#4DB6AC',
    videoUrl: '/videos/graphs/TopologicalSortEducational.mp4'
  },

  // Dynamic Programming (5 videos)
  {
    id: 'fibonacci-dp',
    title: 'Fibonacci DP',
    category: 'dp',
    categoryLabel: 'DP',
    categoryColor: '#FFF176',
    videoUrl: '/videos/dp/FibonacciDPEducational.mp4'
  },
  {
    id: 'knapsack',
    title: '0/1 Knapsack',
    category: 'dp',
    categoryLabel: 'DP',
    categoryColor: '#FFF176',
    videoUrl: '/videos/dp/KnapsackEducational.mp4'
  },
  {
    id: 'lcs',
    title: 'Longest Common Subsequence',
    category: 'dp',
    categoryLabel: 'DP',
    categoryColor: '#FFF176',
    videoUrl: '/videos/dp/LCSEducational.mp4'
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    category: 'dp',
    categoryLabel: 'DP',
    categoryColor: '#FFF176',
    videoUrl: '/videos/dp/CoinChangeEducational.mp4'
  },
  {
    id: 'edit-distance',
    title: 'Edit Distance',
    category: 'dp',
    categoryLabel: 'DP',
    categoryColor: '#FFF176',
    videoUrl: '/videos/dp/EditDistanceEducational.mp4'
  },

  // Backtracking (5 videos)
  {
    id: 'n-queens',
    title: 'N-Queens Problem',
    category: 'backtracking',
    categoryLabel: 'Backtracking',
    categoryColor: '#FFCC80',
    videoUrl: '/videos/backtracking/NQueensEducational.mp4'
  },
  {
    id: 'subsets',
    title: 'Subsets (Power Set)',
    category: 'backtracking',
    categoryLabel: 'Backtracking',
    categoryColor: '#FFCC80',
    videoUrl: '/videos/backtracking/SubsetsEducational.mp4'
  },
  {
    id: 'permutations',
    title: 'Permutations',
    category: 'backtracking',
    categoryLabel: 'Backtracking',
    categoryColor: '#FFCC80',
    videoUrl: '/videos/backtracking/PermutationsEducational.mp4'
  },
  {
    id: 'sudoku-solver',
    title: 'Sudoku Solver',
    category: 'backtracking',
    categoryLabel: 'Backtracking',
    categoryColor: '#FFCC80',
    videoUrl: '/videos/backtracking/SudokuSolverEducational.mp4'
  },
  {
    id: 'word-search',
    title: 'Word Search',
    category: 'backtracking',
    categoryLabel: 'Backtracking',
    categoryColor: '#FFCC80',
    videoUrl: '/videos/backtracking/WordSearchEducational.mp4'
  },

  // Strings (4 videos)
  {
    id: 'kmp',
    title: 'KMP Pattern Matching',
    category: 'strings',
    categoryLabel: 'Strings',
    categoryColor: '#90CAF9',
    videoUrl: '/videos/strings/KMPEducational.mp4'
  },
  {
    id: 'rabin-karp',
    title: 'Rabin-Karp Algorithm',
    category: 'strings',
    categoryLabel: 'Strings',
    categoryColor: '#90CAF9',
    videoUrl: '/videos/strings/RabinKarpEducational.mp4'
  },
  {
    id: 'longest-palindrome',
    title: 'Longest Palindromic Substring',
    category: 'strings',
    categoryLabel: 'Strings',
    categoryColor: '#90CAF9',
    videoUrl: '/videos/strings/LongestPalindromeEducational.mp4'
  },
  {
    id: 'anagrams',
    title: 'Group Anagrams',
    category: 'strings',
    categoryLabel: 'Strings',
    categoryColor: '#90CAF9',
    videoUrl: '/videos/strings/AnagramsEducational.mp4'
  },

  // Interview (5 videos)
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    category: 'interview',
    categoryLabel: 'Interview',
    categoryColor: '#EF9A9A',
    videoUrl: '/videos/interview/NumberOfIslandsEducational.mp4'
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    category: 'interview',
    categoryLabel: 'Interview',
    categoryColor: '#EF9A9A',
    videoUrl: '/videos/interview/LRUCacheEducational.mp4'
  },
  {
    id: 'merge-k-sorted',
    title: 'Merge K Sorted Lists',
    category: 'interview',
    categoryLabel: 'Interview',
    categoryColor: '#EF9A9A',
    videoUrl: '/videos/interview/MergeKSortedEducational.mp4'
  },
  {
    id: 'median-finder',
    title: 'Find Median from Data Stream',
    category: 'interview',
    categoryLabel: 'Interview',
    categoryColor: '#EF9A9A',
    videoUrl: '/videos/interview/MedianFinderEducational.mp4'
  },
  {
    id: 'top-k-frequent',
    title: 'Top K Frequent Elements',
    category: 'interview',
    categoryLabel: 'Interview',
    categoryColor: '#EF9A9A',
    videoUrl: '/videos/interview/TopKFrequentEducational.mp4'
  },

  // Math & Bits (6 videos)
  {
    id: 'sieve',
    title: 'Sieve of Eratosthenes',
    category: 'math',
    categoryLabel: 'Math & Bits',
    categoryColor: '#B39DDB',
    videoUrl: '/videos/math/SieveOfEratosthenesEducational.mp4'
  },
  {
    id: 'gcd-euclid',
    title: 'Euclidean GCD',
    category: 'math',
    categoryLabel: 'Math & Bits',
    categoryColor: '#B39DDB',
    videoUrl: '/videos/math/GCDEuclidEducational.mp4'
  },
  {
    id: 'fast-exponentiation',
    title: 'Fast Exponentiation',
    category: 'math',
    categoryLabel: 'Math & Bits',
    categoryColor: '#B39DDB',
    videoUrl: '/videos/math/FastExponentiationEducational.mp4'
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation Basics',
    category: 'math',
    categoryLabel: 'Math & Bits',
    categoryColor: '#B39DDB',
    videoUrl: '/videos/math/BitManipulationBasicsEducational.mp4'
  },
  {
    id: 'count-set-bits',
    title: "Count Set Bits (Kernighan's)",
    category: 'math',
    categoryLabel: 'Math & Bits',
    categoryColor: '#B39DDB',
    videoUrl: '/videos/math/CountSetBitsEducational.mp4'
  },
  {
    id: 'single-number',
    title: 'Single Number (XOR)',
    category: 'math',
    categoryLabel: 'Math & Bits',
    categoryColor: '#B39DDB',
    videoUrl: '/videos/math/SingleNumberEducational.mp4'
  },
];
