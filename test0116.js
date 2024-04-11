document.getElementById("newjeans").addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const members = [
    { name: "다니엘", x1: 0, y1: 119, x2: 195, y2: 600 },
    { name: "해린", x1: 195, y1: 148, x2: 350, y2: 600 },
    { name: "하니", x1: 350, y1: 113, x2: 510, y2: 600 },
    { name: "혜인", x1: 518, y1: 79, x2: 649, y2: 600 },
    { name: "민지", x1: 702, y1: 85, x2: 841, y2: 600 },
  ];

  const clickedMember = members.find(
    (member) =>
      x >= member.x1 && x <= member.x2 && y >= member.y1 && y <= member.y2
  );

  let message = `x좌표: ${x}, y좌표: ${y}`;
  if (clickedMember) {
    message += `, 클릭된 멤버: ${clickedMember.name}`;
  }

  document.getElementById("click").innerText = message;
});
