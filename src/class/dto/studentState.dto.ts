import { IsBoolean, IsNotEmpty } from 'class-validator';

export class StudentStateDto {
  @IsBoolean({ message: '참 또는 거짓만 입력가능합니다' })
  @IsNotEmpty({ message: '수강신청 허락여부를 선택해주세요' })
  isOk: boolean;
}
