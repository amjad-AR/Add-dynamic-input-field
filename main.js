document.addEventListener("DOMContentLoaded", function () {
  const addFieldBtn = document.getElementById("addFieldBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const saveBtn = document.getElementById("saveBtn");
  const dynamicFields = document.getElementById("dynamicFields");
  const fieldName = document.getElementById("fieldName");
  const fieldType = document.getElementById("fieldType");

  let fieldCount = 0;

  // إضافة حقل جديد
  addFieldBtn.addEventListener("click", function () {
    if (fieldName.value.trim() === "") {
      alert("يرجى إدخال اسم للحقل");
      return;
    }

    // إزالة رسالة "لا توجد حقول" إذا كانت موجودة
    if (fieldCount === 0) {
      dynamicFields.innerHTML = "";
    }

    fieldCount++;

    const fieldItem = document.createElement("div");
    fieldItem.className = "field-item";
    fieldItem.innerHTML = `
                    <button class="delete-field" title="حذف الحقل">
                        <i class="fas fa-times"></i>
                    </button>
                    <input type="${fieldType.value}" placeholder="${fieldName.value}">
                `;

    dynamicFields.appendChild(fieldItem);

    // إضافة حدث للحذف للحقل الفردي
    const deleteBtn = fieldItem.querySelector(".delete-field");
    deleteBtn.addEventListener("click", function () {
      fieldItem.remove();
      fieldCount--;

      // إظهار رسالة "لا توجد حقول" إذا تم حذف جميع الحقول
      if (fieldCount === 0) {
        dynamicFields.innerHTML = `
                            <div class="empty-state">
                                <i class="fas fa-inbox"></i>
                                <p>لا توجد حقول مضافة بعد</p>
                            </div>
                        `;
      }
    });

    // مسح حقل الإدخال بعد الإضافة
    fieldName.value = "";
  });

  // مسح جميع الحقول
  clearAllBtn.addEventListener("click", function () {
    if (fieldCount === 0) {
      alert("لا توجد حقول لحذفها");
      return;
    }

    if (confirm("Are you sure if you want to delete this tiem")) {
      dynamicFields.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-inbox"></i>
                            <p>لا توجد حقول مضافة بعد</p>
                        </div>
                    `;
      fieldCount = 0;
    }
  });
});
