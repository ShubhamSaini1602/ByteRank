const obj = {
  "title": "Add Two Integers",
  "description": "Given two integers, num1 and num2, return their sum.",
  "difficulty": "easy",
  "tags": "math",
  "visibleTestCases": [
    {
      "input": "5 10",
      "output": "15",
      "explanation": "5 + 10 = 15."
    },
    {
      "input": "-2 3",
      "output": "1",
      "explanation": "-2 + 3 = 1."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "0 0",
      "output": "0"
    },
    {
      "input": "1000 -1000",
      "output": "0"
    }
  ],
  "startCode": [
    {
      "language": "C++",
      "initialCode": "#include <iostream>\n\nclass Solution {\npublic:\n    int add(int num1, int num2) {\n        // Write your code here\n    }\n};\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    Solution sol;\n    std::cout << sol.add(a, b);\n    return 0;\n}"
    },
    {
      "language": "Java",
      "initialCode": "import java.util.Scanner;\n\nclass Solution {\n    public int add(int num1, int num2) {\n        // Write your code here\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num1 = sc.nextInt();\n        int num2 = sc.nextInt();\n        \n        Solution sol = new Solution();\n        System.out.print(sol.add(num1, num2));\n    }\n}"
    },
    {
      "language": "JavaScript",
      "initialCode": "process.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n\nlet input = '';\n\nprocess.stdin.on('data', function (chunk) {\n    input += chunk;\n});\n\nclass Solution {\n    add(num1, num2) {\n        // Write your code here\n    }\n}\n\nprocess.stdin.on('end', function () {\n    const lines = input.split(' ');\n    const num1 = parseInt(lines[0], 10);\n    const num2 = parseInt(lines[1], 10);\n    \n    const sol = new Solution();\n    const result = sol.add(num1, num2);\n    console.log(result);\n});"
    }
  ],
  "referenceSolution": [
    {
      "language": "C++",
      "completeCode": "#include <iostream>\n\nclass Solution {\npublic:\n    int add(int num1, int num2) {\n        return num1 + num2;\n    }\n};\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    Solution sol;\n    std::cout << sol.add(a, b);\n    return 0;\n}"
    },
    {
      "language": "Java",
      "completeCode": "import java.util.Scanner;\n\nclass Solution {\n    public int add(int num1, int num2) {\n        return num1 + num2;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num1 = sc.nextInt();\n        int num2 = sc.nextInt();\n        \n        Solution sol = new Solution();\n        System.out.print(sol.add(num1, num2));\n    }\n}"
    },
    {
      "language": "JavaScript",
      "completeCode": "process.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n\nlet input = '';\n\nprocess.stdin.on('data', function (chunk) {\n    input += chunk;\n});\n\nclass Solution {\n    add(num1, num2) {\n        return num1 + num2;\n    }\n}\n\nprocess.stdin.on('end', function () {\n    const lines = input.split(' ');\n    const num1 = parseInt(lines[0], 10);\n    const num2 = parseInt(lines[1], 10);\n    \n    const sol = new Solution();\n    const result = sol.add(num1, num2);\n    console.log(result);\n});"
    }
  ]
}